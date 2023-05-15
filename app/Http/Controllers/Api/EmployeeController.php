<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image as Image;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:191',
            'email' => 'required|max:191',
            'phone_number' => 'required|max:191',
            'address' => 'required|max:20',
            'nid_number' => 'required|max:191',
            'salary' => 'required|max:191',
            'position' => 'required|max:191',
            'joining_date' => 'required|max:191',
            'photo' => 'required',
        ]);
        $input = $request->all();
        if ($request->photo) {
            $position = strpos($request->photo, ';');
            $sub = substr($request->photo, 0, $position);
            $ext = explode('/', $sub)[1];
            $name = time() . "." . $ext;
            $img = Image::make($request->photo)->resize(240, 200);
            $upload_path = 'assets/employee/';
            $image_url = $upload_path . $name;
            $img->save($image_url);
            $input['photo'] = $image_url;
        }
        Employee::create($input);
        return response('inserted');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::findOrFail($id);
        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:191',
            'email' => 'required|max:191',
            'phone_number' => 'required|max:191',
            'address' => 'required|max:20',
            'nid_number' => 'required|max:191',
            'salary' => 'required|max:191',
            'position' => 'required|max:191',
            'joining_date' => 'required|max:191',
        ]);

        $input = $request->all();
        $employee = Employee::findOrFail($id);
        if ($request->new_photo) {
            if (file_exists($employee->photo)) {
                unlink($employee->photo);
            }
            $position = strpos($request->new_photo, ';');
            $sub = substr($request->new_photo, 0, $position);
            $ext = explode('/', $sub)[1];
            $name = time() . "." . $ext;
            $img = Image::make($request->new_photo)->resize(240, 200);
            $upload_path = 'assets/employee/';
            $image_url = $upload_path . $name;
            $img->save($image_url);
            $input['photo'] = $image_url;
        }
        $employee->update($input);
        return response('updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        if (file_exists($employee->photo)) {
            unlink($employee->photo);
        }
        $employee->delete();
        return response('deleted');
    }
}
