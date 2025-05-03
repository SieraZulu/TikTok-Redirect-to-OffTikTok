// ==UserScript==
// @name         Redirect TikToks to OffTikTok
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Redirect TikToks to offtiktok
// @author       stormzilla
// @match        *://*.tiktok.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.hostname.includes('offtiktok.com')) return;
    if (!location.pathname.includes('/video/') && !location.pathname.includes('/photo/')) return;
    const newHost = location.hostname.replace('tiktok.com', 'offtiktok.com');
    const newURL = `${location.protocol}//${newHost}${location.pathname}${location.search}${location.hash}`;
    window.location.replace(newURL);
})();
