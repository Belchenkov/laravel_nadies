<?php

Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');

Route::get('/categories', 'CategoryController@index');

Route::get('/menu-editor/{any?}', 'AdminController@menu')
    ->middleware('can:edit-menu')
    ->where('any', '.*');
