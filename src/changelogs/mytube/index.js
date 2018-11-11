// If you think I added the entire changelog by hand you're nuts. Regex all the way

let changelogJson = {
    "3.4": [
        "Redesigned the donation flyout",
        "Added monthly donations alongside one-time donations",
        "Added custom color scheme builder as a reward for monthly donations",
        "Changed sync enforcement rules so the video changes speeds less aggressively when out of sync with the audio",
        "Reduced sync enforcement threshold, so audio and video should remain a bit more tightly in sync",
        "New buffering UI overlay on player controls to make the buffering state more obvious (only appears if the video has been buffering for 3 seconds or longer)",
        "Fixed issue that sometimes caused the video player to be in the wrong position at launch",
        "Fixed translation issue on download flyout with the string specifying that the video can only be played in myTube",
        "Fixed issue where the actual playback rate reset to 1 with each new video, despite the UI showing otherwise",
        "Fixed issue where &nbsp;, &gt;, and &lt; could appear in subtitles undecoded",
        " ",
        "(Anniversary Update+) Changed how the video player is repositioned around the UI, so the player changes positions more quickly and smoothly",
        "(Fall Creators Update+) Added VP9 playback option to playback settings, disabled by default (except on Xbox One X) and must be enabled to get qualities above 1080p",
        " ",
        "(PC & Mobile) Added 'Copy link' menu item to channel page app bar",
        "(PC & Mobile) Improved performance on Subscribed To page by drawing blurred backgrounds one by one",
        "(PC & Mobile) Returned toggle to sync subscriptions to contacts in settings",
        "(PC & Mobile) Comment text is now selectable",
        "(PC & Mobile) URL and timecode parsing added to comments",
        "(PC & Mobile) Double tapping or clicking the left or right edge of the video will jump forward or backward by 10 seconds",
        "(PC & Mobile) Added animated icon to tap/double tap actions on video player (pause, fullscreen, etc.)",
        " ",
        "(PC) Added the ability to pin subscriptions channels to the taskbar and use the My People feature to quickly view channels without opening the full app",
        "(PC) Added option to automatically enter fullscreen when a video starts",
        "(PC) Added button for myTube! Companion to the account menu app bar",
        "(PC) Faster pointer hover animation on video thumbnails",
        "(PC) Fixed issue where starting the app up to the video page (live tile, myTube Companion, etc) while in theatre mode resulted in an incorrect layout",
        "(PC) Fixed issue where the backup URI for timeline activity was missing 'watch' in the link",
        "(PC) While in picture-in-picture, pressing Esc, Backspace, or the mouse back button will now exit picture-in-picture",
        " ",
        "(Xbox) Context menu now makes sound upon open and close",
        "(Xbox) Thicker primary focus visual for thumbnails"
    ],
    "3.3": [
        "Targeting April 2018 SDK",
        "Added myTube Rooms (beta), which allows you to watch videos together and chat with friends",
        "Added Private Mode to settings, which prevents watched videos from being recorded to history or the timeline",
        "Enabled manual language selection ",
        "Small changes to reveal lighting brushes and button template",
        "Fixed playlist bookmarking",
        "Fixed some strings which weren't translated",
        "Fixed issue where pressing enter in the description text box on the upload page didn't create a new line",
        "Fixed occasional crash that could occur when the app tries to load new videos in a list that was already disposed of",
        "Fixed issue where devices might not show up in the video share menu",
        "Reduced memory usage of the WebView player after it's finished being used",
        "Removed requirement for remote system to have a status of \"Available\" before casting to it",
        "When an app restart is required and the device doesn't support restart requests, a toast is shown allowing the app to be restarted after being closed",
        "Optimized http server code, improving the performance of myTube-to-myTube casting",
        "Will attempt to cast with myTube-to-myTube casting even if the remote device URI launch fails, as the launch can sometimes succeed but still return an error",
        "(Fall Creators Update) When a setting is changed that requires a restart, the app will actually restart instead of closing",
        "(PC) Added Theatre Mode",
        "(PC) Watched videos are added to the Windows timeline",
        "(PC) Zoom in animation on thumbnails when moused over",
        "(PC & Mobile) Added playlist history to history page",
        "(PC & Mobile) Added individual video tile pinning",
        "(PC & Mobile) Added small size template to live tiles",
        "(PC & Mobile) Added \"Up next\" experience to the end of videos (same as on Xbox)",
        "(PC & Mobile) Slightly modified layout for account section ",
        "(PC & Mobile) Fixed bug that caused the comment section header to sometimes have the title of the video, instead of \"Comments\"",
        "(PC & Mobile) Fixed issue where the text selection highlight wasn't visible in the search box",
        "(Xbox) Added the ability to leave TV Mode and use the PC UI",
        "(Xbox) Enabled share button in video details ",
        "(Xbox) Rebuilt \"Up next\" UI",
        "(Xbox) Fixed issue where jumping forward with LB/RB would not seek to the correct time in WebView playback unless the player controls were visible",
        "(Xbox) Worked around UWP issue where the cursor may appear during WebView playback, causing the player controls to always be visible",
        "(Xbox) Added support for system reveal focus visual",
        "(Xbox) Directional focus is less strict, so items won't be skipped if they slightly overlap the currently focused item"
    ],
    "3.2": [
        "The app now remembers where you left off in videos (it does not yet automatically resume to that position)",
        "Quality button text changed to settings icon on player controls",
        "Title on video details is now bold and no longer upper case",
        "Audio volume is muted while seeking in 1080p videos to reduce audible skipping",
        "Different method of detecting auth-code when signing in through the in-app browser",
        "Fixed issue where pressing the previous button in the OS media controls might go to the previous song, rather than restarting the current song",
        "Fixed bug where \"Add to queue\" would sometimes add the selected video two spaces after the current video",
        "Fixed crash when using \"Add to queue\" on a video in a playlist while playing the final video of that same playlist",
        "Fixed issue where the app would crash while changing the thumbnail during background audio playback or casting",
        "Fixed issue where an incorrect number of videos may be loaded into a playlist during playback",
        "Fixed issue where some related videos would appear uninitialized",
        "If audio playback fails partway through a video, the app will try to reopen the audio stream",
        "Now targeting the Fall Creators Update SDK",
        "",
        "(PC) Changed the algorithm used to switch the video page between the different desktop layouts and the mobile layout",
        "(PC) Workaround for issue that causes the share button to not work the first time the video page is loaded",
        "(PC) Fixed issue where it was difficult to seek using a mouse in picture-in-picture",
        "(PC) Fixed title bar clickability issue",
        "",
        "(PC/Mobile) Upload date on video thumbnails",
        "(PC/Mobile) Added option for full screen comments (small mobile-sized windows on PC)",
        "(PC/Mobile) After an audio file is saved, it will automatically open in audio-only mode when selected for playback",
        "(PC/Mobile) Double-click fullscreen now occors on pointer release, rather than pointer press, to avoid accidental fullscreens when using touch",
        "(PC/Mobile) Fixed bug where the video page pivot header would appear white on the light theme",
        "(PC/Mobile) Fixed bug where thumbnail wouldn't appear in-app while using DLNA casting",
        "(PC/Mobile) DLNA device search time increased from 7 seconds to 15 seconds(PC/Mobile) Fixed bug where the app would crash while re-rendering the blur effects on the 'Subscribed to' page",
        "(PC/Mobile) Made adjustments to help prevent the thumbnail underneath the minimized player from being selected when trying to open the minimized player with touch",
        "",
        "(Xbox) Suggestions while typing on search page",
        "(Xbox) Brighter title on selected video thumbnails",
        "(Xbox) Smaller blur radius in selected video thumbnail title (from 48 to 36)",
        "(Xbox) Fixed issue where search page would automatically search on navigation, with nothing entered into the text box",
        "(Xbox) Added support for the rewind and fast forward buttons on the Xbox One media remote",
        "(Xbox) Fixed issue where it was difficult to select the \"None\" button to disable subtitles",
        "(Xbox) Added accent colored border and drop shadow around selected video thumbnails",
        "(Xbox) Thumbnail title text now bold",
        "(Xbox) More subtle zoom in animation selected thumbnails",
        "(Xbox) Removed word 'ago' from video thumbnail dates, leaving only the date itself",
        "(Xbox) Updated the style of the \"up next\" button at the end of videos with bold text and an accent colored drop shadow",
        "(Xbox) Changed rewind and fast forward button icons"

    ],
    "3.1": [
        "New \"Add to queue\" context menu item lets you add videos to play after the current video",
        "Picture-in-picture support on the anniversary update",
        "Infinite subscriptions scrolling",
        "Patreon rewards implemented into the app",
        "Support for stop button on media remotes, keyboards, etc.",
        "Channel notification limit increased to 20",
        "Returned polls to developer messages",
        "Added \"Now Playing\" button to video player, which allows you to see all videos in the current playlist and play which ever one you want",
        "The player controls now take 0.5 seconds longer to appear",
        "(PC/Mobile) Added setting to change thumbnail size",
        "(PC/Mobile) Added \"Use blur effects\" setting, which controls most blur effects in the app",
        "(PC/Mobile) Added \"Copy at current time\" context menu item when you click the video URL while the video is playing",
        "(PC/Mobile) The data connection warning will no longer appear while playing saved videos on mobile data",
        "(PC/Mobile) Fixed bug where Entertainment didn't come up as a category for video uploading",
        "(PC/Mobile) Fixed bug where clicking \"View Channel\" on the search page could cause a crash",
        "(PC/Mobile) Fixed bug where copying a link in the app would cause the app's clipboard notification to appear",
        "(PC) Added visual separation between some sections of the app",
        "(PC) Added background noise and reveal lighting",
        "(PC) The app is now extended into the title bar (check out the channel page)",
        "(PC) TV Mode lets you use myTube's Xbox UI on your PC",
        "(Xbox) 'Trending' changed to 'Watch this', with different video categories",
        "(Xbox) Added search options",
        "(Xbox) Navigation using the d-pad is now a little bit smarter and faster",
        "(Xbox) Hold the B button to exit the currently playing video in one click",
        "(Xbox) New animation when opening home page menus (such as \"Library\")"
    ]
}

function loadData() {
    return new Promise(resolve => {
        fetch('http://www.rykenapps.com/changelogs/mytube/changelog.txt')
        .then(res => res.json())
        .then((out) => {
            console.log('Retreived changelog data: ');
            console.log(out);
            resolve(out)
        })
        .catch(err => {
            console.error('An error occured. Falling back to hardcoded changelog (may be out of date)\n');
            console.error(err);
            resolve(changelogJson);
        });
        
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    Object.entries(await loadData()).forEach(([key, props]) => {
        let title = document.createElement('h3');
        title.appendChild(document.createTextNode('New in myTube ' + key.toString()));

        document.body.appendChild(title);

        for (let i in props) {
            let entry = document.createElement('div');
            if (props[i].trim() == '') {
                entry.appendChild(document.createElement('br'));
            } else entry.appendChild(document.createTextNode(' ▪ ' + props[i]));

            document.body.appendChild(entry);
        }

        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('hr'));
    });


});