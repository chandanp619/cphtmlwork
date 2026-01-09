class ID3_Info{
    constructor(audio_url){
        this.title = "";
        this.artist = "";
        this.album = "";
        this.year = "";
        this.comment = "";
        this.genre = "";
        this.audio_url = audio_url;

        this.readID3Tags();
    }

    get_title(){
        return this.title;
    }

    get_artist(){   
        return this.artist;
    }

    get_album(){
        return this.album;
    }

    get_year(){
        return this.year;
    }

    get_comment(){
        return this.comment;
    }

    get_genre(){
        return this.genre;
    }

    get_audio_url(){
        return this.audio_url;
    }

    // read the ID3 tags from the audio file
    async readID3Tags(){
        let audio = new FileReader();
        let blob = await fetch(this.audio_url).then(r => r.blob());
        //let blob = new File(this.audio_url);
        audio.onload = () => {
            //read id3 tags
            let id3 = audio.genres;
            console.log(id3);
            this.title = id3.title;
            this.artist = id3.artist;
            this.album = id3.album;
            this.year = id3.year;
            this.comment = id3.comment;
            this.genre = id3.genre;
        }
        audio.readAsArrayBuffer(blob);
    }


}