const firebaseConfig = {
    apiKey: "AIzaSyDDtUgcAlPkmaGjPF3PkbJQGHfuls7W4DI",
    authDomain: "cyclofix-signup.firebaseapp.com",
    databaseURL: "https://cyclofix-signup.firebaseio.com",
    projectId: "cyclofix-signup",
    storageBucket: "cyclofix-signup.appspot.com",
    messagingSenderId: "560756500994",
    appId: "1:560756500994:web:48e767e94b736cb3f2151b"
};

function randomColor() {
    const colors = [, "#f44336", "#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#ff8a80", "#ff5252", "#ff1744", "#d50000", "#e91e63", "#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162", "#9c27b0", "#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff", "#673ab7", "#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea", "#3f51b5", "#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe", "#2196f3", "#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#82b1ff", "#448aff", "#2979ff", "#2962ff", "#03a9f4", "#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea", "#00bcd4", "#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4", "#009688", "#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#a7ffeb", "#64ffda", "#1de9b6", "#00bfa5", "#4caf50", "#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#b9f6ca", "#69f0ae", "#00e676", "#00c853", "#8bc34a", "#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#ccff90", "#b2ff59", "#76ff03", "#64dd17", "#cddc39", "#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00", "#ffeb3b", "#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffff8d", "#ffff00", "#ffea00", "#ffd600", "#ffc107", "#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ffe57f", "#ffd740", "#ffc400", "#ffab00", "#ff9800", "#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ffd180", "#ffab40", "#ff9100", "#ff6d00", "#ff5722", "#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00", "#795548", "#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "#9e9e9e", "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#607d8b", "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"]
    return colors[Math.floor(Math.random() * colors.length)];
}

function newMarkerIcon(color, colorOuter = '#E9C46A') {
    let markerColorOuter = colorOuter;
    let markerColorInner = color;
    
    return L.divIcon({
        html: `<div width=47 height=64>
                    <svg viewBox="0 0 94 128"><path d="M46.977 126.643c-.283-.687-6.163-6.437-10.374-11.662C11.656 81.858-16.158 51.083 16.32 13.683 30.7-.211 48.433-1.003 66.663 5.473c51.33 29.702 14.166 78.155-10.236 110.008l-9.45 11.162zm15.44-50.771C96.654 51.387 70.185 4.239 32.57 19.913 21.585 25.77 16.135 35.961 15.944 47.981 15.42 59.674 21.63 69.45 31.47 75.44c7.056 3.84 10.157 4.534 18.146 4.058 5.178-.308 8.161-1.154 12.801-3.627zM37.164 87.562a44.989 43.921 0 111.121.219" fill="${markerColorOuter}" fill-opacity=".988"/><path d="M44.277 69.129a26.01 20.991 0 11.648.104" opacity=".34" fill="none"/><path d="M32.537 114.28a16.656 11.75 0 11.416.059" fill="none"/><path d="M40.106 81.381a33.426 34.453 0 11.833.172" fill="${markerColorInner}"/><path d="M42.017 69.425a22.106 22.59 0 11.55.112" fill="${markerColorOuter}"/></svg>
                </div>`,
        iconSize: [47, 64],
        iconAnchor: [23.5, 64]
    })
}

class Pin {
    constructor (loc) {
        this.loc = loc;
    }
    toString() {
        return `lat: ${this.loc.latitude}, lng: ${this.loc.longitude}`;
    }
    toMarker(ownMarker = false) {
        const latLng = new L.LatLng(this.loc.latitude, this.loc.longitude);
        return L.marker(latLng, {
            draggable: ownMarker,
            icon: newMarkerIcon(randomColor(), ownMarker ? '#f44336' : undefined)
        });
    }
}

const pinConverter = {
    toFirestore: function(pin) {
        return {
            loc: pin.loc
        }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Pin(data.loc)
    }
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const pinsCollection = db.collection("pins").withConverter(pinConverter);

async function fetchPinDocs() {
    const querySnapshot = await pinsCollection.get();
    return Array.from(querySnapshot.docs);
    //.map(doc => doc.data());
}

// Returns a ref to the added pin
async function addPin(pin) {
    return await pinsCollection.add(pin);
}

// Returns the ref to the updated pin
async function updatePin(ref, pin) {
    await ref.update(pinConverter.toFirestore(pin));
    return ref;
}

// var pinsDoc = db.collection("pins").doc("TU4GzRHTcrNWxuN6oonl").withConverter(pinConverter).get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data().toString());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });


// db.ref("pins/2FTU4GzRHTcrNWxuN6oonl").once('value').then(function(snapshot) {
//     const pins = snapshot.val();
//     console.log(pins);
// });

function toGeoPoint(latLng) {
    return new firebase.firestore.GeoPoint(latLng.lat, latLng.lng)
}

let statusTxt;
function updateStatusTxt(msg) {
    statusTxt.innerText = msg;
}

const LOCAL_STORAGE_PIN_ID_KEY = 'ownPinRef'
function savePinId(id) {
    localStorage.setItem(LOCAL_STORAGE_PIN_ID_KEY, id);
}

function getPinId() {
    return localStorage.getItem(LOCAL_STORAGE_PIN_ID_KEY);
}

async function createOwnMarkerAndAddToMap(ownPinInfo, map) {
    ownPinInfo.marker = ownPinInfo.pin.toMarker(true);
    ownPinInfo.marker.addTo(map);
    ownPinInfo.marker.on('dragend', async function(e) {
        const latLng = ownPinInfo.marker.getLatLng();
        ownPinInfo.pin.loc = toGeoPoint(latLng);
        updateStatusTxt('Updating pin...');
        await updatePin(ownPinInfo.ref, ownPinInfo.pin);
        updateStatusTxt('Pin updated');
    });
}

async function init() {
    statusTxt = document.getElementById('statusTxt');

    const map = new L.Map('map', { center: new L.LatLng(50.8465, 4.3517), zoom: 14 });

    const tileUrl = 'https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=hzPTkHaOajQq34V8m9jS';
    const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(tileUrl, { maxZoom: 18, attribution: osmAttrib }).addTo(map);

    let ownPinInfo = {
        marker: null,
        pin: null,
        ref: null
    }

    updateStatusTxt('Loading pins...');
    const pinDocs = await fetchPinDocs();
    updateStatusTxt('Pins loaded');
    let otherPinDocs = null;
    const ownPinId = getPinId();
    if (ownPinId != null) {
        const ownPinDocI = pinDocs.findIndex(doc => doc.id === ownPinId);
        if (ownPinDocI == -1) {
            console.error('LocalStorage had an invalid pin id! Ignoring and creating new...');
            ownPinInfo.ref = null;
            otherPinDocs = pinDocs;
        } else {
            const ownPinDoc = pinDocs[ownPinDocI];
            ownPinInfo.ref = ownPinDoc.ref;
            ownPinInfo.pin = ownPinDoc.data();
            otherPinDocs = pinDocs.slice(0, ownPinDocI).concat(pinDocs.slice(ownPinDocI+1))
            createOwnMarkerAndAddToMap(ownPinInfo, map);
            updateStatusTxt('Your previously added pin is red');
        }
    } else {
        otherPinDocs = pinDocs;
    }
    const markers = otherPinDocs.map(pinDoc => pinDoc.data().toMarker());
    markers.forEach(marker => marker.addTo(map));

    map.on('click', async function(e) {
        if (ownPinInfo.marker === null) {           
            ownPinInfo.pin = new Pin(toGeoPoint(e.latlng));
            updateStatusTxt('Adding pin...');
            ownPinInfo.ref = await addPin(ownPinInfo.pin);
            updateStatusTxt('Pin added');
            savePinId(ownPinInfo.ref.id);
            createOwnMarkerAndAddToMap(ownPinInfo, map);
            return
        }
        console.log(e.latlng);
        ownPinInfo.pin.loc = toGeoPoint(e.latlng);
        updateStatusTxt('Updating pin');
        console.log(ownPinInfo.ref);
        await updatePin(ownPinInfo.ref, ownPinInfo.pin);
        updateStatusTxt('Pin updated');        
        ownPinInfo.marker.setLatLng(e.latlng);
    });
}

window.addEventListener('load', init);



// L.Mask = L.Polygon.extend({
//     options: {
//         stroke: false,
//         color: '#333',
//         fillOpacity: 0.5,
//         clickable: true,

//         outerBounds: new L.LatLngBounds([-90, -360], [90, 360])
//     },
//     toMaskLatLngs: function (latLngs) {
//         let outerBoundsLatLngs = [
//             this.options.outerBounds.getSouthWest(),
//             this.options.outerBounds.getNorthWest(),
//             this.options.outerBounds.getNorthEast(),
//             this.options.outerBounds.getSouthEast()
//         ];  
//         return [outerBoundsLatLngs, latLngs];
//     },
//     setMaskLatLngs: function (latLngs) {
//         this.setLatLngs(this.toMaskLatLngs(latLngs));
//     },
//     initialize: function (latLngs, options) {
//         L.Polygon.prototype.initialize.call(this, this.toMaskLatLngs(latLngs), options);	
//     },
// });
// L.mask = function (latLngs, options) {
//     return new L.Mask(latLngs, options);
// };

// map.addControl(new L.Control.Draw({
//     edit: {
//         featureGroup: drawnItems,
//         poly: {
//             allowIntersection: false
//         }
//     },
//     draw: {
//         circle: {
//             repeatMode: true
//         },
//         polyline: false,
//         polygon: false,
//         rectangle: false,
//         marker: false,
//         circlemarker: false
//     }
// }));

// let discoveredPoly = turf.polygon([[
//     [4.3263, 50.8193],
//     [4.3976, 50.8193],
//     [4.3976, 50.8568],
//     [4.3263, 50.8568],
//     [4.3263, 50.8193]
// ]])

// const polyCoords = turf.getCoords(discoveredPoly)[0]
// var latLngs = [];
// for (i=0; i<polyCoords.length; i++) {
//     latLngs.push(new L.LatLng(polyCoords[i][1], polyCoords[i][0]));
// }

// const mask = L.mask(latLngs).addTo(map);

// map.on(L.Draw.Event.CREATED, e => {
//     const latLng = e.layer.getLatLng();
//     const radius = e.layer.getRadius();
//     console.log(latLng, radius);

//     const circle = turf.circle(
//         [latLng.lng, latLng.lat],
//         radius,
//         {
//             steps: 20,
//             units: 'meters'
//         }
//     );

//     console.log(circle);
    
//     discoveredPoly = turf.union(circle, discoveredPoly);
//     console.log(discoveredPoly);

//     const polyCoordsNew = turf.getCoords(discoveredPoly)[0];
//     console.log(polyCoordsNew);
//     const latLngsNew = [];
//     for (i=0; i<polyCoordsNew.length; i++) {
//         latLngsNew.push(new L.LatLng(polyCoordsNew[i][1], polyCoordsNew[i][0]));
//     }
//     console.log(latLngsNew)
//     mask.setMaskLatLngs(latLngsNew);
// });


