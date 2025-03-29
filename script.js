 let progress = document.getElementById("progress");
        let song = document.getElementById("song");
        let ctricon = document.getElementById("ctricon");
        song.onloadedmetadata = function() {
            progress.max = song.duration;
        };
        song.ontimeupdate = function() {
            progress.value = song.currentTime;
        };
        function playpause() {
            if (ctricon.classList.contains("fa-pause")) {
                song.pause();
                ctricon.classList.add("fa-play");
                ctricon.classList.remove("fa-pause");
            } else {
                song.play();
                ctricon.classList.remove("fa-play");
                ctricon.classList.add("fa-pause");
            }
        }
        if(song.play()){
            setInterval(()=>{
                progress.value = song.currentTime;
            },500);
            progress.onchange = function(){
            song.play();
            song.currentTime= progress.value;
            ctricon.classList.add("fa-pause");
            ctricon.classList.remove("fa-play"); 
            };
        }
        progress.oninput = function() {
            song.currentTime = progress.value;
            ctricon.classList.add("fa-pause");
            ctricon.classList.remove("fa-play");
        };