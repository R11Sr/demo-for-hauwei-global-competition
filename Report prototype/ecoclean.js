var map = L.map('map', {
    maxZoom: 14
});

const attribution ='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution }).addTo(map);

var photoLayer = L.photo.cluster().on('click', function (evt) {
    var photo = evt.layer.photo,
        template = '<img src="{url}" width="300" height="300" /></a><p>{caption}</p>';

    if (photo.video && (!!document.createElement('video').canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2'))) {
        template = '<video autoplay controls poster="{url}" width="300" height="300"><source src="{video}" type="video/mp4"/></video>';
    }; 

    evt.layer.bindPopup(L.Util.template(template, photo), {
        className: 'leaflet-popup-photo',
        minWidth: 300
    }).openPopup();
});

let data = {
    rows:	[
        {
            "lat": 18.1096,
            "lng": -77.2975,
            "thumbnail":"./images/g1.jpg",
            "url":"./images/g1.jpg",
            "video":"",
            "caption":"G1"
        },
        {
            "lat": 17.99207,
            "lng": -76.79200,
            "thumbnail":"./images/g2.jpg",
            "url":"./images/g2.jpg",
            "video":"",
            "caption":"g2"
        },
        {
            "lat": 18.1076,
            "lng": -76.7879,
            "thumbnail":"./images/g3.jpg",
            "url":"./images/g3.jpg",
            "video":"",
            "caption":"g3"
        },
        {
            "lat": 17.997766,
            "lng": -76.9561758,
            "thumbnail":"./images/g4.jpg",
            "url":"./images/g4.jpg",
            "video":"",
            "caption":"g4"
        },
        {
            "lat": 18.476578,
            "lng": -77.917703,
            "thumbnail":"./images/g5.jpg",
            "url":"./images/g5.jpg",
            "video":"",
            "caption":"g5"
        },
        {
            "lat": 17.971308,
            "lng": -76.793939,
            "thumbnail":"./images/g6.jpg",
            "url":"./images/g6.jpg",
            "video":"",
            "caption":"g6"
        },
        {
            "lat": 17.971982,
            "lng": -76.791750,
            "thumbnail":"./images/g7.jpg",
            "url":"./images/g7.jpg",
            "video":"",
            "caption":" g7"
        },
        {
            "lat": 18.457955,
            "lng": -77.888759,
            "thumbnail":"./images/g8.jpg",
            "url":"./images/g8.jpg",
            "video":"",
            "caption":"g8"
        },
        {
            "lat": 18.471357,
            "lng": -77.907262,
            "thumbnail":"./images/g9.jpg",
            "url":"./images/g9.jpg",
            "video":"",
            "caption":"g9"
        },
        {
            "lat": 18.470116,
            "lng": -77.922781,
            "thumbnail":"./images/g10.jpg",
            "url":"./images/g10.jpg",
            "video":"",
            "caption":"g10"
        }
    ]
}

photoLayer.add(data.rows).addTo(map);
map.fitBounds(photoLayer.getBounds());
