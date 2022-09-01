<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use App\Models\Tweet;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * @param Request $request
     * @return string
     */
    public function __invoke(Request $request)
    {
        $tweets = Tweet::all();
        return view('tweet.index')
                ->with('tweets', $tweets);
    }
}
