const OptionsTweet = {
    open(){
        document
            .querySelector('.options-tweet-overlay')
            .classList
            .add('active')
    },
    close(){
        document
            .querySelector('.options-tweet-overlay')
            .classList
            .remove('active')    
    }
}

