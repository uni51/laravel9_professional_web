<?php

namespace App\Services;

use App\Models\Tweet;

class TweetService
{
    /**
     * @return mixed
     */
    public function getTweets()
    {
        return Tweet::orderBy('created_at', 'DESC')->get();
    }
}

