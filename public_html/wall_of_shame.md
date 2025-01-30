
root@412micromedia:/var/www/vhosts# du -hs * | sort -hs

501M    karol41.412micromedia.com

516M    paul76.412micromedia.com

547M    angus29.412micromedia.com

562M    patrick00.412micromedia.com

565M    jason59.412micromedia.com

618M    chelsea49.412micromedia.com

652M    jenny05.412micromedia.com

729M    lara87.412micromedia.com

759M    shaqaiq58.412micromedia.com

793M    maya15.412micromedia.com

853M    roddy41.412micromedia.com



root@412micromedia:/var/www/vhosts# find * -type f -printf '%s %p\n' | sort -nr | head -20

185811723 jenny05.412micromedia.com/httpdocs/vid_audio/video/visiting_the_palace-jenny.mp4

170786923 jenny05.412micromedia.com/httpdocs/vid_audio/video/promise.mp4

96553152 patrick00.412micromedia.com/patrickmlacson.com/video/patricklacson-elevator-pitch.gif

96553152 patrick00.412micromedia.com/httpdocs/portfolio/video/patricklacson-elevator-pitch.gif

93751461 chelsea49.412micromedia.com/httpdocs/web2/projects/project1/book layout/5189250.psd

80630363 jason59.412micromedia.com/httpdocs/img/JasonBG2.gif

67649529 jenny05.412micromedia.com/httpdocs/vid_audio/video/garden.mp4

67239936 jayvee28.412micromedia.com/httpdocs/web5/case_study/555pics/squadron.mp4

63164273 chelsea49.412micromedia.com/httpdocs/video/loop/content/roddy_loop.mp4

58733847 lara87.412micromedia.com/httpdocs/video/audio/tomp3.cc - Berserk  Theme of Guts Cut  Looped for One Hour.mp3

58350647 jason59.412micromedia.com/jasonbasilan.com/casestudy/img/banner.gif

58350647 jason59.412micromedia.com/httpdocs/web5/casestudy/img/banner.gif

56625035 maya15.412micromedia.com/mayademarco.com/img/MAYA_DEMARCO-Portfolio2024.pdf

53936934 paul76.412micromedia.com/httpdocs/web3/img/wallpaper.mp4

52376230 ngoctrang34.412micromedia.com/httpdocs/personalwebsite/studycase/image/MELIA_2.png

50163505 roddy41.412micromedia.com/httpdocs/web5/clienttemplate/ClientASSETS/ClientVidPrevsCUT/FRUITMACHINEPREV_1.mp4

49082668 ngoctrang34.412micromedia.com/httpdocs/personalwebsite/image/loop.mp4

45600944 roddy41.412micromedia.com/httpdocs/web5/clienttemplate/ClientASSETS/ClientVidPrevsCUT/GhostTrackerPrev.mp4

43908193 kirsten18.412micromedia.com/httpdocs/web2/videos/metro.mp4

43188075 maya15.412micromedia.com/httpdocs/video/vdos/project1_loop_unfinished.mp4



root@412micromedia:/var/www/vhosts# find * -type f -name "*.psd"

angus29.412micromedia.com/httpdocs/becoming2/billings-sports/img/photoshop-image-file.psd

brandon06.412micromedia.com/httpdocs/web3/animations/walking-sprite-sheet.psd

brandon06.412micromedia.com/httpdocs/web3/img/rockets-sprite-sheet.psd

brandon06.412micromedia.com/httpdocs/web2/img/wp/project1/homepagebg.psd

chelsea49.412micromedia.com/httpdocs/web2/projects/project1/book layout/5189250.psd

felipe58.412micromedia.com/httpdocs/web5/Portfolio Website/study-2/websitedesign.psd

jayvee28.412micromedia.com/httpdocs/web2/img/Velasco_Jayvee_FInal_project.psd

joshua16.412micromedia.com/httpdocs/web5/project4/img/Hoodie_Mockup.psd

maya15.412micromedia.com/httpdocs/web2/exercises/img/daschundedit.psd

tracy14.412micromedia.com/httpdocs/web3/animation/img/salmon_clown.psd

tracy14.412micromedia.com/httpdocs/web3/animation/img/pinkclown.psd



root@412micromedia:/var/www/vhosts# find * -type f -name "*.ai"

brandon06.412micromedia.com/httpdocs/web3/time-to-say-goodbye/img/ttsgb-logo.ai

brandon06.412micromedia.com/httpdocs/web3/img/cyberpunk-assets.ai

brandon06.412micromedia.com/httpdocs/web3/img/fair-ride.ai

brandon06.412micromedia.com/httpdocs/web3/img/fair-night-lights.ai

brandon06.412micromedia.com/httpdocs/web3/img/vans.ai

brandon06.412micromedia.com/httpdocs/web2/img/wp/project1/trudeau-timeline.ai

brandon06.412micromedia.com/httpdocs/web2/img/racing.ai

kiara18.412micromedia.com/httpdocs/web3/img/path2.ai

kiara18.412micromedia.com/httpdocs/web3/img/starmove.ai

kiara18.412micromedia.com/httpdocs/web3/img/pathhhh.ai

kiara18.412micromedia.com/httpdocs/web3/img/Lego brick2.ai

roddy41.412micromedia.com/httpdocs/animation/svganimtest.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/images/splash_planet1.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/images/splash_page.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/images/WINNER.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/space_chicken_gameplay/images/astronaut.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/game/images/app icon.ai

tracy14.412micromedia.com/httpdocs/web3/space_chicken/game/images/astronaut.ai

tracy14.412micromedia.com/httpdocs/web3/moodboard/profile_icon_moodboard.ai