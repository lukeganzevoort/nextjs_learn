'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    <button onClick={handleClick}>Likes ({likes})</button>
}