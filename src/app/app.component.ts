import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ori';

  public dataVideos = [
    {
      "title": "Protes uang kuliah UIN bandung",
      "author": "waseem arshad",
      "viewer": "10000",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2014/12/17/f4bd6399-e1c9-4ae1-a9f2-5b3f807c5fa1_169.jpg?w=220&q=90",
      "type": "video",
      "timeline": "2 minutes"
    },
    {
      "title": "Nego Telkom-Netflix Masih Berjalan untuk Buka Blokir",
      "author": "michael ",
      "viewer": "20",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2019/08/24/776f948c-aabd-4534-b932-0dc5e1b51a97_169.jpeg?w=220&q=90",
      "type": "file",
      "timeline": "32 minutes"
    },
    {
      "title": "Penjualan Runtuh Saat Pandemi, Uji Tipe Mobil Baru Berkurang",
      "author": "ronaldo ",
      "viewer": "3000",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2018/07/17/d9ea8da5-220d-444e-9560-fe0709678ab5_169.jpeg?w=220&q=90",
      "type": "heart",
      "timeline": "1 minutes"
    },
    {
      "title": "changmin tvxq umumkan bakal menikah september 2020",
      "author": "wahid ahad",
      "viewer": "4000",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2020/02/21/61e93e58-4c8c-441e-a72d-ef994882dd09_169.jpeg?w=220&q=90",
      "type": "comments",
      "timeline": "30 minutes"
    },
    {
      "title": "Jelang Ultah, BTS Rilis Video We Are Bulletproof: the Eternal",
      "author": "soman mongol",
      "viewer": "1200",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2020/02/21/53a38ced-6c6d-4468-81b6-12c0315a7b00_169.jpeg?w=220&q=90",
      "type": "video",
      "timeline": "20 secone"
    },
    {
      "title": "Sri lanka wajibkan turis tes corona dan wisata maksimal 5 hari",
      "author": "nadiem makarim",
      "viewer": "4300",
      "video": "https://www.youtube.com/embed/tgbNymZ7vqY",
      "image": "https://akcdn.detik.net.id/visual/2020/06/09/ella-sri-lanka-1_169.jpeg?w=220&q=90",
      "type": "file",
      "timeline": "2 hour"
    }
  ]

  public dataChannel = [
    {
      "name": "google",
      "image": "https://img.icons8.com/plasticine/2x/google-logo.png"
    },
    {
      "name": "microsoft",
      "image": "https://cdn0.iconfinder.com/data/icons/shift-free/32/Microsoft-512.png"
    },
    {
      "name": "indosiar",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/INDOSIAR_Logo.png"
    },
    {
      "name": "indosiar",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/INDOSIAR_Logo.png"
    },
    {
      "name": "facebook",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"
    },
    {
      "name": "twitter",
      "image": "https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Twitter-Logo.png?resize=300%2C244"
    },
    {
      "name": "youtube",
      "image": "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/youtube-512.png"
    },
    {
      "name": "instagram",
      "image": "https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png"
    },
    {
      "name": "path",
      "image": "https://cdn2.iconfinder.com/data/icons/social-media-icon-set-6/94/path-512.png"
    },
    {
      "name": "instagram",
      "image": "https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png"
    },
  ]
}
