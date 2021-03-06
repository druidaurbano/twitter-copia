const OptionsTweet = {
    open(){     //Open the overlay menu options
        document        //talvez tentar fazer utilizando toogle para ativar e desativar a classe
            .querySelector('.options-tweet-overlay')
            .classList      //acessa a propriedade classList de '.options-tweet-overlay'
            .add('active')
    },
    close(){
        document
            .querySelector('.options-tweet-overlay')
            .classList
            .remove('active')    
    }
}

const tweets = [
    {
        tweetId: 1,
        tweetPhoto: 'profile-photo',
        tweetName: 'Rafael Portugal',
        tweetUser: 'rafaportugalc',
        tweetHour: 15,
        tweetContent: `Medo de falar que ele vai sair pela Porta dos Fundos e ir parar no meu trabalho`
    },
    {
        tweetId: 2,
        tweetPhoto: 'profile-photo',
        tweetName: 'Ecosia',
        tweetUser: 'Ecosia',
        tweetHour: 6,
        tweetContent: `it's march again and time ia a construct`
    },
    {
        tweetId: 3,
        tweetPhoto: 'profile-photo',
        tweetName: 'the lich queen',
        tweetUser: 'lichqueenx',
        tweetHour: 28,
        tweetContent: `world of arcraft makes me mad but i ill continue paying $15 a month for it`
    },
    {
        tweetId: 4,
        tweetPhoto: 'profile-photo',
        tweetName: 'Kat Dennings',
        tweetUser: 'OfficialKat',
        tweetHour: 14,
        tweetContent: `I might have to get married just so there’s someone around to save me from choking`
    },
    {
        tweetId: 5,
        tweetPhoto: 'profile-photo',
        tweetName: 'Greenpeace',
        tweetUser: 'Greenpeace',
        tweetHour: 17,
        tweetContent: `We need a climate compensation fund so the coal, oil and gas companies that have contributed the most to the climate crisis pick up some of the damage bill, instead of ordinary Australians.
        #climatechange #extremeweather`
    },
]

const trendingTopics = [
    {
        id: 1,
        trendingWhere: 'Trending in Brazil',
        title: 'God of War',
        count: '5500'
    },
    {
        id: 2,
        trendingWhere: 'Entertainment - Trending',
        title: 'WhatsApp 2',
        count: '33.7K'
    },
    {
        id: 3,
        trendingWhere: 'Trending in Brazil',
        title: 'Bella Thorne',
        count: '10.1K'
    },
    {
        id: 4,
        trendingWhere: 'Trending in Brazil',
        title: 'God of War',
        count: 5500
    },
    {
        id: 5,
        trendingWhere: 'Trending in Brazil',
        title: 'God of War',
        count: 5500
    },
]

const whoToFollow = [
    {
        id: 1,
        photo: 'profile-photo',
        name: 'Fridays for Future',
        user: 'FridayForFuture'
    },
    {
        id: 2,
        photo: 'profile-photo',
        name: 'Submarino',
        user: 'submarino'
    },
    {
        id: 3,
        photo: 'profile-photo',
        name: 'Mayk Brito',
        user: 'maykbrito'
    },
]

const Transaction = {
    //criar um novo tweet
    //apagar um tweet
    //retweetar
    //favoritar
    //comentar
}

const DOM = {
    tweetsContainer: document.querySelector('.timeline'),
    trendingContainer: document.querySelector('.body-happening'),
    whoToFollowContainer: document.querySelector('.who-to-follow-title'),
    
    addTweet(tweet, index) {
        const div = document.createElement('div')
        div.innerHTML = DOM.innerHTMLTweet(tweet)

        DOM.tweetsContainer.appendChild(div)
        //console.log(div.innerHTML)
    },

    addTrending(trending, index){
        const div = document.createElement('div')
        div.className = "body-item"
        div.innerHTML = DOM.innerHTMLTrending(trending)

        DOM.trendingContainer.appendChild(div)
    },

    addWhoToFollow(who, index){
        const div = document.createElement('div')
        div.className = "account-item"
        div.innerHTML = DOM.innerHTMLWhoToFollow(who)

        DOM.whoToFollowContainer.insertAdjacentElement('afterend', div) // adiciona depois de .who-to-follow-title através de insertAdjacentElement
    },

    innerHTMLTweet(tweet) {
        const html = `
            <div class="tweet-timeline">
                <div class="tweet-photo">
                    <img src="./assets/profile-photo.jpg" alt="Profile Photo" class="rounded-edge">
                </div>

                <div class="tweet-content">
                    <div class="tweet-name-user">
                        <div>
                            <a href="#">
                                <div class="tweet-name">
                                    <span>${tweet.tweetName}</span>
                                </div>
                            </a>

                            <span class="user">@${tweet.tweetUser}</span>

                            <span class="user">-</span>

                            <span class="user">${tweet.tweetHour}h</span>
                        </div>

                        <a href="#"
                            onclick="OptionsTweet.open()">
                            
                            <svg viewBox="0 0 24 24" class="tweet-more">
                                <g>
                                    <circle cx="5" cy="12" r="2"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <circle cx="19" cy="12" r="2"></circle>
                                </g>
                            </svg>
                        </a>
                        
                    </div>

                    <div>
                        <div class="tweet-text">
                            <span>${tweet.tweetContent}</span>
                        </div>

                        <div class="tweet-options-icons">
                            <div class="tweet-icons">
                                <svg viewbox="0 0 24 24" class="icon-comment">
                                    <g>
                                    <path d="M 14.046 2.242 l -4.148 -0.01 h -0.002 c -4.374 0 -7.8 3.427 -7.8 7.802
                                        c 0 4.098 3.186 7.206 7.465 7.37 v 3.828 c 0 0.108 0.044 0.286 0.12 0.403 
                                        c 0.142 0.225 0.384 0.347 0.632 0.347 c 0.138 0 0.277 -0.038 0.402 -0.118 
                                        c 0.264 -0.168 6.473 -4.14 8.088 -5.506 c 1.902 -1.61 3.04 -3.97 3.043 -6.312 
                                        v -0.017 c -0.006 -4.367 -3.43 -7.787 -7.8 -7.788 Z m 3.787 12.972 c -1.134 0.96 
                                        -4.862 3.405 -6.772 4.643 V 16.67 c 0 -0.414 -0.335 -0.75 -0.75 -0.75 h -0.396 
                                        c -3.66 0 -6.318 -2.476 -6.318 -5.886 c 0 -3.534 2.768 -6.302 6.3 -6.302 l 4.147 
                                        0.01 h 0.002 c 3.532 0 6.3 2.766 6.302 6.296 c -0.003 1.91 -0.942 3.844 -2.514 
                                        5.176 Z"></path>
                                    </g>
                                </svg>
                            </div>

                            <div class="tweet-icons">
                                <svg viewbox="0 0 24 24" class="icon-retweet">
                                    <g>
                                        <path d="M 23.77 15.67 c -0.292 -0.293 -0.767 -0.293 -1.06 0 l -2.22 2.22 V 7.65 c 0 -2.068 -1.683 -3.75 -3.75 -3.75 h -5.85 c -0.414 0 -0.75 0.336 -0.75 0.75 s 0.336 0.75 0.75 0.75 h 5.85 c 1.24 0 2.25 1.01 2.25 2.25 v 10.24 l -2.22 -2.22 c -0.293 -0.293 -0.768 -0.293 -1.06 0 s -0.294 0.768 0 1.06 l 3.5 3.5 c 0.145 0.147 0.337 0.22 0.53 0.22 s 0.383 -0.072 0.53 -0.22 l 3.5 -3.5 c 0.294 -0.292 0.294 -0.767 0 -1.06 Z m -10.66 3.28 H 7.26 c -1.24 0 -2.25 -1.01 -2.25 -2.25 V 6.46 l 2.22 2.22 c 0.148 0.147 0.34 0.22 0.532 0.22 s 0.384 -0.073 0.53 -0.22 c 0.293 -0.293 0.293 -0.768 0 -1.06 l -3.5 -3.5 c -0.293 -0.294 -0.768 -0.294 -1.06 0 l -3.5 3.5 c -0.294 0.292 -0.294 0.767 0 1.06 s 0.767 0.293 1.06 0 l 2.22 -2.22 V 16.7 c 0 2.068 1.683 3.75 3.75 3.75 h 5.85 c 0.414 0 0.75 -0.336 0.75 -0.75 s -0.337 -0.75 -0.75 -0.75 Z"></path>
                                    </g>
                                </svg>
                            </div>                                        

                            <div class="tweet-icons">
                                <svg viewbox="0 0 24 24" class="icon-favorite">
                                    <g>
                                        <path d="M 12 21.638 h -0.014 C 9.403 21.59 1.95 14.856 1.95 8.478 c 0 -3.064 2.525 -5.754 5.403 -5.754 c 2.29 0 3.83 1.58 4.646 2.73 c 0.814 -1.148 2.354 -2.73 4.645 -2.73 c 2.88 0 5.404 2.69 5.404 5.755 c 0 6.376 -7.454 13.11 -10.037 13.157 H 12 Z M 7.354 4.225 c -2.08 0 -3.903 1.988 -3.903 4.255 c 0 5.74 7.034 11.596 8.55 11.658 c 1.518 -0.062 8.55 -5.917 8.55 -11.658 c 0 -2.267 -1.823 -4.255 -3.903 -4.255 c -2.528 0 -3.94 2.936 -3.952 2.965 c -0.23 0.562 -1.156 0.562 -1.387 0 c -0.014 -0.03 -1.425 -2.965 -3.954 -2.965 Z"></path>
                                    </g>
                                </svg>
                            </div>
                            
                            <div class="tweet-icons">
                                <svg viewbox="0 0 24 24" class="icon-share">
                                    <g>
                                        <path d="M 17.53 7.47 l -5 -5 c -0.293 -0.293 -0.768 -0.293 -1.06 0 l -5 5 c -0.294 0.293 -0.294 0.768 0 1.06 s 0.767 0.294 1.06 0 l 3.72 -3.72 V 15 c 0 0.414 0.336 0.75 0.75 0.75 s 0.75 -0.336 0.75 -0.75 V 4.81 l 3.72 3.72 c 0.146 0.147 0.338 0.22 0.53 0.22 s 0.384 -0.072 0.53 -0.22 c 0.293 -0.293 0.293 -0.767 0 -1.06 Z"></path>
                                        <path d="M 19.708 21.944 H 4.292 C 3.028 21.944 2 20.916 2 19.652 V 14 c 0 -0.414 0.336 -0.75 0.75 -0.75 s 0.75 0.336 0.75 0.75 v 5.652 c 0 0.437 0.355 0.792 0.792 0.792 h 15.416 c 0.437 0 0.792 -0.355 0.792 -0.792 V 14 c 0 -0.414 0.336 -0.75 0.75 -0.75 s 0.75 0.336 0.75 0.75 v 5.652 c 0 1.264 -1.028 2.292 -2.292 2.292 Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        `
        
        return html
    },

    innerHTMLTrending(trending){
        const html = `
            <div class="gray-title">
                <div class="gray-trending">${trending.trendingWhere}</div>
                
                <div>                                                                            
                    <svg viewBox="0 0 24 24" class="more-happening">
                        <g>                                            
                            <circle cx="5" cy="12" r="2"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                            <circle cx="19" cy="12" r="2"></circle>                                                
                        </g>
                    </svg>
                </div>    
            </div>

            <div class="white-title">
                ${trending.title}
            </div>

            <div class="tweet-count">
                ${trending.count} Tweets
            </div>
        `

        return html;
    },

    innerHTMLWhoToFollow(who){
        const html = `
            <div class="follow-profile-photo">
                <img src="./assets/profile-photo.jpg" alt="Profile Photo follow" class="rounded-edge">
            </div>
        
            <div class="name-button-container">
                <div class="follow-account">

                    <div class="name-account-follow">

                        <div>${who.name}</div>

                        <div>
                            <svg viewBox="0 0 24 24" class="verified-icon">
                                <g>
                                    <path d="M 22.5 12.5 c 0 -1.58 -0.875 -2.95 -2.148 -3.6 c 0.154 -0.435 0.238 -0.905 0.238 -1.4 c 0 -2.21 -1.71 -3.998 -3.818 -3.998 c -0.47 0 -0.92 0.084 -1.336 0.25 C 14.818 2.415 13.51 1.5 12 1.5 s -2.816 0.917 -3.437 2.25 c -0.415 -0.165 -0.866 -0.25 -1.336 -0.25 c -2.11 0 -3.818 1.79 -3.818 4 c 0 0.494 0.083 0.964 0.237 1.4 c -1.272 0.65 -2.147 2.018 -2.147 3.6 c 0 1.495 0.782 2.798 1.942 3.486 c -0.02 0.17 -0.032 0.34 -0.032 0.514 c 0 2.21 1.708 4 3.818 4 c 0.47 0 0.92 -0.086 1.335 -0.25 c 0.62 1.334 1.926 2.25 3.437 2.25 c 1.512 0 2.818 -0.916 3.437 -2.25 c 0.415 0.163 0.865 0.248 1.336 0.248 c 2.11 0 3.818 -1.79 3.818 -4 c 0 -0.174 -0.012 -0.344 -0.033 -0.513 c 1.158 -0.687 1.943 -1.99 1.943 -3.484 Z m -6.616 -3.334 l -4.334 6.5 c -0.145 0.217 -0.382 0.334 -0.625 0.334 c -0.143 0 -0.288 -0.04 -0.416 -0.126 l -0.115 -0.094 l -2.415 -2.415 c -0.293 -0.293 -0.293 -0.768 0 -1.06 s 0.768 -0.294 1.06 0 l 1.77 1.767 l 3.825 -5.74 c 0.23 -0.345 0.696 -0.436 1.04 -0.207 c 0.346 0.23 0.44 0.696 0.21 1.04 Z"></path>
                                </g>
                            </svg>
                        </div>   
                    </div> 

                    <div class="user-follow">@${who.user}</div>
                </div>

                <div class="follow">
                    <button>Follow</button>
                </div>
            </div> 
        `
        
        return html
    },
}

tweets.forEach(function(tweet) {
    DOM.addTweet(tweet)
})

trendingTopics.forEach(function(trending){
    DOM.addTrending(trending)
})

whoToFollow.forEach(function(who){
    DOM.addWhoToFollow(who)
})