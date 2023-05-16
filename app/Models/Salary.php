<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'employee_id',
        'amount',
        'salary_date',
        'salary_month',
        'salary_year',
        'note',
    ];

    /**
     * Get the phone associated with the user.
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id')
            ->select('id', 'name', 'email', 'phone_number');
    }
}
