<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use App\Models\Tweet;
use App\Services\TweetService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FirstInertiaController extends Controller
{
    public function __invoke(Request $request, TweetService $tweetService)
    {
        $tweets = $tweetService->getTweets();

        return Inertia::render('TweetIndex')
            ->with('tweets', $tweets);
    }
}
