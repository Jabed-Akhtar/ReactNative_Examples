/*
 * :Music source: https://pixabay.com/music/
 */

import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id: 1,
        title: 'Just Relax',
        artist: 'Unknown',
        album: 'Unknown',
        artwork: 'https://pixabay.com/get/g1dbdc4947cf18cd76272521cd23150ebf0bcca195a6f14175f181859e921a0e3f11891460773e1bfa8ea071980165d5e3669016b84e038fe9970b541feaf63dd_1280.jpg',
        url: require('../assets/just-relax-11157.mp3'),
    },
    {
        id: 2,
        title: 'Powerful',
        artist: 'Unknown',
        album: 'Unknown',
        artwork: 'https://pixabay.com/get/geaf9b163e25c5f326cd42c7a851a1974d610c51171096508e4f02f586a71b3793d3f3542fafc43184174b941706f329f6ebb7ac37d028fd81a0e564116c493c3_1280.jpg',
        url: require('../assets/powerful-beat-121791.mp3'),
    },
    {
        id: 3,
        title: 'Smoke',
        artist: 'Unknown',
        album: 'Unknown',
        artwork: 'https://pixabay.com/get/gf6dec5f5015bffad1f5caaaa04d6af92e2b4e79437c09cdac9a7ad0a6fc206884348bcae56ed3f7faaa847c319864017_1280.jpg',
        url: require('../assets/smoke-143172.mp3'),
    },
];
