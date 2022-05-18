<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->unsignedBigInteger('position_id');
            $table->string('path')->nullable();
            $table->string('url')->nullable();
            $table->rememberToken();
            $table->timestamp('registration_timestamp')->default(DB::raw('CURRENT_TIMESTAMP'));

            $table->softDeletes();

            $table->index('position_id', 'user_position_idx');
            $table->foreign('position_id', 'user_position_fk')
                ->on('positions')->references('id');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
