<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('user_requests', function (Blueprint $table) {
        $table->id();

        $table->uuid('uuid')->unique();

        $table->string('email')->nullable();
        $table->string('password')->nullable();

        $table->string('full_name')->nullable();
        $table->string('study_group')->nullable();
        $table->string('phone')->nullable();

        $table->string('status')->default('pending');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_requests');
    }
};
