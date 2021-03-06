---
mainImage: ../../images/part-3.svg
part: 3
letter: c
---

<div class="content">

Ennen kun siirrymmen osan varsinaiseen aiheeseen, eli tiedon tallettamiseen tietokantaan, tarkastellaan muutamaa tapaa Node-sovellusten debuggaamiseen.

### Node-sovellusten debuggaaminen

Nodella tehtyjen sovellusten debuggaaminen on jossain määrin hankalampaa kuin selaimessa toimivan Javascriptin. Vanha hyvä keino on tietysti konsoliin tulostelu. Se kannattaa aina. On mielipiteitä, joiden mukaan konsoliin tulostelun sijaan olisi syytä suosia jotain kehittyneempää menetelmää, mutta en ole ollenkaan samaa mieltä. Jopa maailman aivan eliittiin kuuluvat open source -kehittäjät [käyttävät](https://tenderlovemaking.com/2016/02/05/i-am-a-puts-debuggerer.html) tätä [menetelmää](https://swizec.com/blog/javascript-debugging-slightly-beyond-console-log/swizec/6633).

#### Visual Studio Code

Visual Studio Coden debuggeri voi olla hyödyksi joissain tapauksissa. Saat käynnistettyä sovelluksen debuggaustilassa seuraavasti

![](../images/3/35.png)

Huomaa, että sovellus ei saa olla samalla käynnissä "normaalisti" konsolista, sillä tällöin sovelluksen käyttämä portti on varattu.

Seuraavassa screenshot, missä koodi on pysäytetty kesken uuden muistiinpanon lisäyksen

![](../images/3/36a.png)

Koodi on pysähtynyt nuolen osoittaman <i>breakpointin</i> kohdalle ja konsoliin on evaluoitu muuttujan <i>note</i> arvo. Vasemmalla olevassa ikkunassa on nähtävillä myös muuta ohjelman tilaan liittyvää.

Ylhäällä olevista nuolista yms. voidaan kontrolloida debuggauksen etenemistä.

Itse en jostain syystä juurikaan käytä Visual Studio Code debuggeria.

#### Chromen dev tools

Debuggaus onnisuu myös Chromen developer-konsolilla, käynnistämällä sovellus komennolla:

```bash
node --inspect index.js
```

Debuggeriin pääsee käsiksi klikkaamalla chromen devloper-konsoliin ilmestyneestä vihreästä ikonista

![](../images/3/37.png)

Debuggausnäkymä toimii kuten React-koodia debugattaessa, <i>Sources</i>-välilehdelle voidaan esim. asettaa breakpointeja, eli kohtia joihin suoritus pysähtyy:

![](../images/3/38.png)

Kaikki sovelluksen console.log-tulostukset tulevat debuggerin <i>Console</i>-välilehdelle. Voit myös tutkia siellä muuttujien arvoja ja suorittaa mielivaltaista Javascript-koodia:

![](../images/3/39.png)

#### Epäile kaikkea

Full Stack -sovellusten debuggaaminen vaikuttaa alussa erittäin hankalalta. Kun kohta kuvaan tulee myös tietokanta ja frontend on yhdistetty backendiin, on potentiaalisia virhelähteitä todella paljon.

Kun sovellus "ei toimi", onkin selvitettävä missä vika on. On erittäin yleistä, että vika on sellaisessa paikassa, mitä ei osaa ollenkaan epäillä, ja menee minuutti-, tunti- tai jopa päiväkausia ennen kuin oikea ongelmien lähde löytyy.

Avainasemassa onkin systemaattisuus. Koska virhe voi olla melkein missä vaan, <i>kaikkea pitää epäillä</i>, ja tulee pyrkiä poissulkemaan ne osat tarkastelusta, missä virhe ei ainakaan ole. Konsoliin kirjoitus, Postman, debuggeri ja kokemus auttavat.

Virheiden ilmaantuessa <i>ylivoimaisesti huonoin strategia</i> on jatkaa koodin kirjoittamista. Se on tae siitä, että koodissa on pian kymmenen ongelmaa lisää ja niiden syyn selvittäminen on entistäkin vaikeampaa. Toyota Production Systemin periaate [Stop and fix](http://gettingtolean.com/toyota-principle-5-build-culture-stopping-fix/#.Wjv9axP1WCQ) toimii tässäkin yhteydessä paremmin kuin hyvin.

### MongoDB

Jotta saisimme talletettua muistiinpanot pysyvästi, tarvitsemme tietokannan. Useimmilla laitoksen kursseilla on käytetty relaatiotietokantoja. Tällä kurssilla käytämme [MongoDB](https://www.mongodb.com/):tä, joka on ns. [dokumenttitietokanta](https://en.wikipedia.org/wiki/Document-oriented_database).

Dokumenttitietokannat poikkeavat jossain määrin relaatiotietokannoista niin datan organisointitapansa kuin kyselykielensäkin suhteen. Dokumenttitietokantojen ajatellaan kuuluvan sateenvarjotermin [NoSQL](https://en.wikipedia.org/wiki/NoSQL) alle. Lisää dokumenttitietokannoista ja NoSQL:stä Tietokantojen perusteiden [viikon 7 materiaalista](https://tikape-s18.mooc.fi/part7/).

**Lue nyt Tietokantojen perusteiden dokumenttitietokantoja kuvaava osuus.** Jatkossa oletetaan, että hallitset käsitteet <i>dokumentti</i> ja <i>kokoelma</i> (collection).

MongoDB:n voi luonnollisesti asentaa omalle koneelle. Internetistä löytyy kuitenkin myös palveluna toimivia Mongoja (esim [mlab](https://mlab.com/) ja [MongoDbCloud](https://www.mongodb.com/cloud/atlas)) ja seuraava ohje olettaa, että käytössä on jo vuosien kokemuksella luotettavaksi havaittu [mlab](https://mlab.com/).

Mlab-kanta on helppo ottaa käyttöön suoraan [Herokun kautta](https://elements.heroku.com/addons/mongolab), vaikka tämä on maksutonta, edellyttää se luottokorttitietojen antamista Herokulle.

Määrittelemmekin seuraavassa kannan suoraan [mlab](https://mlab.com/):iin, jolloin luottokorttitietoja ei tarvita.

Aloita luomalla mlabiin käyttäjätili, saatuasi mlabilta verifiointimailin ja kirjauduttuasi mailin linkin kautta sisään, voit luoda tietokannan:

![](../images/3/40.png)

Määrittele esim. <i>Amazon web services</i>, tyypiksi ilmainen <>sandbox</i> ja sijoituspaikaksi <i>Irlanti</i> ja anna kannalle sopiva nimi.

Kun kanta on hetken kuluttua valmis, mene tietokannan hallintanäkymään

![](../images/3/41.png)

Näkymä kertoo <i>MongoDB URI:n</i> eli osoitteen, jonka avulla sovelluksemme käyttämä MongoDB-kirjasto saa yhteyden kantaan.

Osoite näyttää seuraavalta:

```bash
mongodb://<dbuser>:<dbpassword>@ds161224.mlab.com:61224/fullstack2019-notes
```

Tarvitsemme kannan käyttöä varten <i>dbuserin</i> eli käyttäjätunnuksen. Käyttäjätunnuksen luominen tapahtuu tietokannan hallintanäkymästä

![](../images/3/42.png)

Jos luotiin käyttäjätunnus <i>fullstack</i> jonka salasana on <i>sekred1</i>, on tietokannan osoite seuraava:

```bash
mongodb://fullstack:sekred1@ds161224.mlab.com:61224/fullstack2019-notes
```

Olemme nyt valmiina kannan käyttöön.

Voisimme käyttää kantaa Javascript-koodista suoraan Mongon virallisen
[MongoDB Node.js driver](https://mongodb.github.io/node-mongodb-native/) -kirjaston avulla, mutta se on ikävän työlästä. Käytämmekin hieman korkeammalla tasolla toimivaa [Mongoose](http://mongoosejs.com/index.html)-kirjastoa.

Mongoosesta voisi käyttää luonnehdintaa <i>object document mapper</i> (ODM), ja sen avulla Javascript-olioiden tallettaminen mongon dokumenteiksi on suoraviivaista.

Asennetaan Mongoose:

```bash
npm install mongoose --save
```

Ei lisätä mongoa käsittelevää koodia heti backendin koodin sekaan, vaan tehdään erillinen kokeilusovellus tiedostoon <i>mongo.js</i>:

```js
const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb://fullstack:${password}@ds161224.mlab.com:61224/fullstack2019-notes`

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML on helppoa',
  date: new Date(),
  important: true,
})

note.save().then(response => {
  console.log('note saved!');
  mongoose.connection.close();
})
```

 Koodi siis olettaa, että sille annetan parametrina mlabiin määritelty salasana. Komentoriviparametriin se pääsee käsiksi seuraavasti

```js
const password = process.argv[2]
```

Kun koodi suoritetaan komennolla <i>node mongo.js salasana</i> lisää Mongoose tietokantaan uuden dokumentin.

Mlab:in hallintanäkymä näyttää lisäämämme datan:

![](../images/3/43.png)

Kuten näkymä kertoo, on muistiinpanoa vastaava <i>dokumentti</i> lisätty kokoelmaan (collection) nimeltään <i>notes</i>.

### Skeema

Yhteyden avaamisen jälkeen määritellään mustiinpanon [skeema](http://mongoosejs.com/docs/guide.html) ja sitä vastaava [model](http://mongoosejs.com/docs/models.html):

```js
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```

Ensin muuttujaan _noteSchema_ määritellään muistiinpanon [skeema](http://mongoosejs.com/docs/guide.html), joka kertoo Mongooselle, miten muistiinpano-oliot tulee tallettaa tietokantaan.

Modelin _Note_ määrittelyssä ensimmäisenä parametrina oleva merkkijono <i>Note</i> määrittelee, että mongoose tallettaa muistiinpanoa vastaavat oliot kokoelmaan nimeltään <i>notes</i>, sillä [Mongoosen konventiona](http://mongoosejs.com/docs/models.html) on määritellä kokoelmien nimet monikossa (esim. <i>notes</i>), kun niihin viitataan skeeman määrittelyssä yksikkömuodossa (esim. <i>Note</i>).

Dokumenttikannat, kuten Mongo ovat <i>skeemattomia</i>, eli tietokanta itsessään ei välitä mitään sinne talletettavan tiedon muodosta. Samaan kokoelmaankin on mahdollista tallettaa olioita joilla on täysin eri kentät.

Mongoosea käytettäessä periaatteena on kuitenkin se, että tietokantaan talletettavalle tiedolle määritellään <i>sovelluksen koodin tasolla skeema</i>, joka määrittelee minkä muotoisia olioita kannan eri kokoelmiin talletetaan.

### Olioiden luominen ja tallettaminen

Seuraavaksi sovellus luo muistiinpanoa vastaavan [model](http://mongoosejs.com/docs/models.html):in avulla muistiinpano-olion:

```js
const note = new Note({
  content: 'Selain pystyy suorittamaan vain javascriptiä',
  date: new Date(),
  important: false,
})
```

Modelit ovat ns. <i>konstruktorifunktioita</i>, jotka luovat parametrien perusteella Javascript-olioita. Koska oliot on luotu modelien konstruktorifunktiolla, niillä on kaikki modelien ominaisuudet, eli joukko metodeja, joiden avulla olioita voidaan mm. tallettaa tietokantaan.

Tallettaminen tapahtuu metodilla _save_. Metodi palauttaa <i>promisen</i>, jolle voidaan rekisteröidä _then_-metodin avulla tapahtumankäsittelijä:

```js
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
```

Kun olio on tallennettu kantaan, kutsutaan _then_:in parametrina olevaa tapahtumankäsittelijää, joka sulkee tietokantayhteyden komennolla <code>mongoose.connection.close()</code>. Ilman yhteyden sulkemista ohjelman suoritus ei pääty.

Tallennusoperaation tulos on takaisinkutsun parametrissa _result_. Yhtä olioa tallentaessamme tulos ei ole kovin mielenkiintoinen, olion sisällön voi esim. tulostaa konsoliin jos haluaa tutkia sitä tarkemmin sovelluslogiikassa tai esim. debugatessa.

Talletetaan kantaan myös pari muuta muistiinpanoa muokkaamalla dataa koodista ja suorittamalla ohjelma uudelleen.

**HUOM** valitettavasti Mongoosen dokumentaatiossa käytetään joka paikassa takaisinkutsufunktioita, joten sieltä ei kannata suoraan copypasteta koodia, sillä promisejen ja vanhanaikaisten callbackien sotkeminen samaan koodiin ei ole kovin järkevää.

### Olioiden hakeminen tietokannasta

Kommentoidaan koodista uusia muistiinpanoja generoiva osa, ja korvataan se seuraavalla:

```js
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
```

Kun koodi suoritetaan, kantaan talletetut muistiinpanot tulostuvat.

Oliot haetaan kannasta _Note_-modelin metodilla [find](http://mongoosejs.com/docs/api.html#find_find). Metodin parametrina on hakuehto. Koska hakuehtona on tyhjä olio <code>{}</code>, saimme kannasta kaikki _notes_-kokoelmaan talletetut oliot.

Hakuehdot noudattavat mongon [syntaksia](https://docs.mongodb.com/manual/reference/operator/).

Voisimme hakea esim. ainoastaan tärkeät muistiinpanot seuraavasti:

```js
Note.find({ important: true }).then(result => {
  // ...
})
```

</div>

<div class="tasks">

### Tehtäviä

#### 3.12: tietokanta komentoriviltä

Luo sovellukselle pilvessä oleva mongo mlabin avulla.

Tee projektihakemistoon tiedosto <i>mongo.js</i>, jonka avulla voit lisätä tietokantaan puhelinnumeroja sekä listata kaikki kannassa olevat numerot.

**Huom** jos/kun laitat tiedoston Githubiin, älä laita tietokannan salasanaa mukaan!

Ohjelma toimii siten, että jos sille annetaan käynnistäessä kolme komentoriviparametria (joista ensimmäinen on salasana), esim:

```bash
node mongo.js salasana Joulupukki 040-1234556
```

Ohjelma tulostaa

```bash
lisätään Joulupukki numero 040-1234556 luetteloon
```

ja lisää uuden yhteystiedon tietokantaan. Huomaa, että jos nimi sisältää välilyöntejä, on se annettava hipsuissa:

```bash
node mongo.js "Arto Vihavainen" 040-1234556
```

Jos komentoriviparametreina ei ole muuta kuin salasana, eli ohjelma suoritetaan komennolla

```bash
node mongo.js salasana
```

tulostaa ohjelma tietokannassa olevat numerotiedot:

<pre>
puhelinluettelo:
Pekka Mikkola 040-1234556
Arto Vihavainen 045-1232456
Tiina Niklander 040-1231236
</pre>

Saat selville ohjelman komentoriviparametrit muuttujasta [process.argv](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_argv)

**HUOM: älä sulje tietokantayhteyttä väärässä kohdassa**. Esim. seuraava koodi ei toimi

```js
Person
  .find({})
  .then(persons=> {
    // ...
  })

mongoose.connection.close()
```

Koodin suoritus nimittäin etenee siten, että heti operaation <i>Person.find</i> käynnistymisen jälkeen suoritetaan komento <i>mongoose.connection.close()</i> ja tietokantayhteys katkeaa välittömästi. Näin ei koskaan päästä siihen pisteeseen, että <i>Person.find</i>-operaation valmistumisen käsittelevää <i>takaisinkutsufunktiota</i> kutsuttaisiin.

Oikea paikka tietokantayhteyden sulkemiselle on takaisinkutsufunktion loppu:

```js
Person
  .find({})
  .then(persons=> {
    // ...
    mongoose.connection.close()
  })
```

**HUOM2** jos määrittelet modelin nimeksi <i>Person</i>, muuttaa mongoose sen monikkomuotoon <i>people</i>, jota se käyttää vastaavan kokoelman nimenä.

</div>

<div class="content">

### Tietokantaa käyttävä backend

Nyt meillä on periaatteessa hallussamme riittävä tietämys ottaa mongo käyttöön sovelluksessamme.

Aloitetaan nopean kaavan mukaan, copypastetaan tiedostoon <i>index.js</i> Mongoosen määrittelyt, eli

```js
const mongoose = require('mongoose')

// ÄLÄ KOSKAAN TALLETA SALASANOJA githubiin!
const url =
  'mongodb://fullstack:secred@ds161224.mlab.com:61224/fullstack2019-notes'

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```

ja muutetaan kaikkien muistiinpanojen hakemisesta vastaava käsittelijä seuraavaan muotoon

```js
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})
```

Voimme todeta selaimella, että backend toimii kaikkien dokumenttien näyttämisen osalta:

![](../images/3/44.png)

Toiminnallisuus on muuten kunnossa, mutta frontend olettaa, että olioiden yksikäsitteinen tunniste on kentässä <i>id</i>. Emme myöskään halua näyttää frontendille mongon versiointiin käyttämää kenttää <i>\_\_v</i>. 

Eräs tapa muotoilla Mongoosen palauttamat oliot haluttuun muotoon on [muokata](https://stackoverflow.com/questions/7034848/mongodb-output-id-instead-of-id) kannasta haettavilla olioilla olevan _toJSON_-metodin palauttamaa muotoa. Metodin muokkaus onnistuu seuraavasti:

```js
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
```

Vaikka Mongoose-olioiden kenttä <i>_id</i> näyttääkin merkkijonolta, se on todellisuudessa olio. Määrittelemämme metodi _toJSON_ muuttaa sen merkkijonoksi kaiken varalta. Jos emme tekisi muutosta, siitä aiheutuisi ylimääräistä harmia testien yhteydessä.

Palautetaan HTTP-pyynnön vastauksena _toJSON_-metodin avulla muotoiltuja oliota:

```js
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes.map(note => note.toJSON()))
  });
});
```

Nyt siis muuttujassa _notes_ on taulukollinen mongon palauttamia olioita. Kun suoritamme operaation <em>notes.map(note => note.toJSON())</em> seurauksena on uusi taulukko, missä on jokaista alkuperäisen taulukon alkiota vastaava metodin _toJSON_ avulla muodostettu alkio.

### Tietokantamäärittelyjen eriyttäminen moduuliksi

Ennen kuin täydennämme backendin muutkin osat käyttämään tietokantaa, eriytetään Mongoose-spesifinen koodi omaan moduuliin.

Tehdään moduulia varten hakemisto <i>models</i> ja sinne tiedosto <i>note.js</i>:

```js
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI // highlight-line

console.log('commecting to', url) // highlight-line

mongoose.connect(url, { useNewUrlParser: true })
// highlight-start
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
// highlight-end

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema) // highlight-line
```

Noden [moduulien](https://nodejs.org/docs/latest-v8.x/api/modules.html) määrittely poikkeaa hiukan osassa 2 määrittelemistämme frontendin käyttämistä [ES6-moduuleista](/osa2/kokoelmien_renderointi_ja_moduulit#refaktorointia-moduulit).

Moduulin ulos näkyvä osa määritellään asettamalla arvo muuttujalle _module.exports_. Asetamme arvoksi modelin <i>Note</i>. Muut moduulin sisällä määritellyt asiat, esim. muuttujat _mongoose_ ja _url_ eivät näy moduulin käyttäjälle.

Moduulin käyttöönotto tapahtuu lisäämällä tiedostoon <i>index.js</i> seuraava rivi

```js
const Note = require('./models/note')
```

Näin muuttuja _Note_ saa arvokseen saman olion, jonka moduuli määrittelee.

Yhteyden muodostustavassa on pieni muutos aiempaan:

```js
const url = process.env.MONGODB_URI

console.log('commecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })
```

Tietokannan osoitetta ei kannata kirjoittaa koodiin, joten osoite annetaan sovellukselle ympäristömuuttujan <em>MONGODB_URI</em> välityksellä. 

Yhteyden muodostavalle metodille on nyt rekisteröity onnistuneen ja epäonnistuneen yhteydenmuodostuksen käsittelevät funktiot, jotka tulostavat konsoliin tiedon siitä, onnistuuko yhteyden muodostaminen:

![](../images/3/45.png)

On useita tapoja määritellä ympäristömuuttujan arvo, voimme esim. antaa sen ohjelman käynnistyksen yhteydessä seuraavasti

```bash
MONGODB_URI=osoite_tahan npm run watch
```

Eräs kehittyneempi tapa on käyttää [dotenv](https://github.com/motdotla/dotenv#readme)-kirjastoa. Asennetaan kirjasto komennolla

```bash
npm install dotenv --save
```

Sovelluksen juurihakemistoon tehdään sitten tiedosto nimeltään <i>.env</i>, minne tarvittavien ympäristömuuttujien arvot määritellään. Tiedosto näyttää seuraavalta

```bash
MONGODB_URI=mongodb://fullstack:secred@ds161224.mlab.com:61224/fullstack2019-notes
PORT=3001
```

Määrittelimme samalla aiemmin kovakoodaamamme sovelluksen käyttämän portin eli ympäristömuuttujan <em>PORT</em>.

**Tiedosto <i>.env</i> tulee heti gitignorata sillä emme halua julkaista tiedoston sisältöä verkkoon!**

dotenvissä määritellyt ympäristömuuttujat otetaan koodissa käyttöön komennolla
<em>require('dotenv').config()</em> ja niihin viitataan Nodessa kuten "normaaleihin" ympäristömuuttujiin syntaksilla <em>process.env.MONGODB_URI</em>.

Muutetaan nyt tiedostoa <i>index.js</i> seuraavasti

```js
require('dotenv').config() // highlight-line
const express = require('express')
const bodyParser = require('body-parser') 
const app = express()
const Note = require('./models/note') // highlight-line

// ..

const PORT = process.env.PORT // highlight-line
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

On tärkeää, että <i>dotenv</i> otetaan käyttöön ennen modelin <i>note</i> importtaamista, tällöin varmistutaan siitä, että tiedostossa <i>.env</i> olevat ympäristömuuttujat ovat alustettuja kun moduulin koodia importoidaan.

### Muut operaatiot

Muutetaan nyt kaikki operaatiot tietokantaa käyttävään muotoon.

Uuden muistiinpanon luominen tapahtuu seuraavasti:

```js
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    response.json(savedNote.toJSON())
  })
})
```

Muistiinpano-oliot siis luodaan _Note_-konstruktorifunktiolla. Pyyntöön vastataan _save_-operaation takaisinkutsufunktion sisällä. Näin varmistutaan, että operaatio vastaus tapahtuu vain jos operaatio on onnistunut. Palaamme virheiden käsittelyyn myöhemmin.

Takaisinkutsufunktion parametrina oleva _savedNote_ on talletettu muistiinpano. HTTP-pyyntöön palautetaan kuitenkin siitä metodilla _toJSON_formatoitu muoto:

```js
response.json(savedNote.toJSON())
```

Yksittäisen muistiinpanon tarkastelu muuttuu muotoon

```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note.toJSON())
  })
})
```

### Frontendin ja backendin yhteistominnallisuuden varmistaminen

Kun backendia laajennetaan, kannattaa sitä testailla aluksi **ehdottomasti selaimella, postmanilla tai VS Coden REST clientillä**. Seuraavassa kokeillaan uuden muistiinpanon luomista tietokannan käyttöönoton jälkeen:

![](../images/3/46.png)

Vasta kun kaikki on todettu toimivaksi, kannattaa siirtyä testailemaan että muutosten jälkeinen backend toimii yhdessä myös frontendin kanssa. Kaikkien kokeilujen tekeminen ainoastaan frontendin kautta on todennäköisesti varsin tehotonta.

Todennäköisesti voi olla kannattavaa edetä frontin ja backin integroinnissa toiminnallisuus kerrallaan, eli ensin voidaan toteuttaa esim. kaikkien muistiinpanojen näyttäminen backendiin ja testata että toiminnallisuus toimii selaimella. Tämän jälkeen varmistetaan, että frontend toimii yhteen muutetun backendin kanssa. Kun kaikki on todettu olevan kunnossa, siirrytään seuraavan ominaisuuden toteuttamiseen.

Kun kuvioissa on mukana tietokanta, on tietokannan tilan tarkastelu mlabin hallintanäkymästä varsin hyödyllistä, usein myös suoraan tietokantaa käyttävät Node-apuohjelmat, kuten tiedostoon <i>mongo.js</i> kirjoittamamme koodi auttavat sovelluskehityksen edetessä.

Sovelluksen tämän hetkinen koodi on kokonaisuudessaan [githubissa](https://github.com/fullstack-hy2019/part3-notes-backend/tree/part3-3), branchissa <i>part3-3</i>.

</div>

<div class="tasks">

### Tehtäviä

Seuraavat tehtävät saattavat olla melko suoraviivaisia, tosin jos frontend-koodissasi sattuu olemaan bugeja tai epäyhteensopivuutta backendin kanssa, voi seurauksena olla myös mielenkiintoisia bugeja.

#### 3.13: puhelinluettelo ja tietokanta, step1

Muuta backendin kaikkien puhelintietojen näyttämistä siten, että se <i>hakee näytettävät puhelintiedot tietokannasta</i>.

Varmista, että frontend toimii muutosten jälkeen.

Tee tässä ja seuraavissa tehtävissä Mongoose-spesifinen koodi omaan moduuliin samaan tapaan kuin luvussa [Tietokantamäärittelyjen eriyttäminen moduuliksi](/osa3/tietojen_tallettaminen_mongo_db_tietokantaan#tietokantamaarittelyjen-eriyttaminen-moduuliksi).

#### 3.14: puhelinluettelo ja tietokanta, step2

Muuta backendiä siten, että uudet numerot <i>tallennetaan tietokantaan</i>. 
Varmista, että frontend toimii muutosten jälkeen.

<i>**Tässä vaiheessa voit olla välittämättä siitä, onko tietokannassa jo henkilöä jolla on sama nimi kuin lisättävällä.**</i>

</div>

<div class="content">

### Virheiden käsittely

Jos yritämme mennä selaimella sellaisen yksittäisen muistiinpanon sivulle, jota ei ole olemassa, eli esim. urliin <http://localhost:3001/api/notes/5c41c90e84d891c15dfa3431> missä <i>5a3b80015b6ec6f1bdf68d</i> ei ole minkään tietokannassa olevan muistiinpanon tunniste, jää selain "jumiin" sillä palvelin ei vastaa pyyntöön koskaan.

Palvelimen konsolissa näkyykin virheilmoitus:

![](../images/3/47.png)

Kysely on epäonnistunut ja kyselyä vastaava promise mennyt tilaan <i>rejected</i>. Koska emme käsittele promisen epäonnistumista, ei pyyntöön vastata koskaan. Osassa 2 tutustuimme jo [promisejen virhetilanteiden käsittelyyn](/osa2/palvelimella_olevan_datan_muokkaaminen#promise-ja-virheet).

Lisätään tilanteeseen yksinkertainen virheidenkäsittelijä:

```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      response.json(formatNote(note))
    })
    .catch(error => {
      console.log(error);
      response.status(404).end()
    })
})
```

Kaikissa virheeseen päättyvissä tilanteissa HTTP-pyyntöön vastataan statuskoodilla 404 not found. Konsoliin tulostetaan tarkempi tieto virheestä.

Tapauksessamme on itseasiassa olemassa kaksi erityyppistä virhetilannetta. Toinen vastaa sitä, että yritetään hakea muistiinpanoa virheellisen muotoisella _id_:llä, eli sellasiella mikä ei vastaa mongon id:iden muotoa.

Jos teemme näin tulostuu konsoliin:

<pre>
Method: GET
Path:   /api/notes/5a3b7c3c31d61cb9f8a0343
Body:   {}
---
{ CastError: Cast to ObjectId failed for value "5a3b7c3c31d61cb9f8a0343" at path "_id"
    at CastError (/Users/mluukkai/opetus/_fullstack/osa3-muisiinpanot/node_modules/mongoose/lib/error/cast.js:27:11)
    at ObjectId.cast (/Users/mluukkai/opetus/_fullstack/osa3-muisiinpanot/node_modules/mongoose/lib/schema/objectid.js:158:13)
    ...
</pre>

Toinen virhetilanne taas vastaa tilannetta, missä haettavan muistiinpanon id on periaatteessa oikeassa formaatissa, mutta tietokannasta ei löydy indeksillä mitään:

<pre>
Method: GET
Path:   /api/notes/5a3b7c3c31d61cbd9f8a0343
Body:   {}
---
TypeError: Cannot read property 'toJSON' of null
    at Note.findById.then.note (/Users/mluukkai/opetus/_2019fullstack-koodit/osa3/notes-backend/index.js:27:24)
    at process._tickCallback (internal/process/next_tick.js:178:7)
</pre>

Nämä tilanteet on syytä erottaa toisistaan, ja itseasiassa jälkimmäinen poikkeus on oman koodimme aiheuttama.

Muutetaan koodia seuraavasti:

```js
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      // highlight-start
      if (note) {
        response.json(formatNote(note))
      } else {
        response.status(404).end() 
      }
      // highlight-end
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' }) // highlight-line
    })
})
```

Jos kannasta ei löydy haettua olioa, muuttujan _note_ arvo on _undefined_ ja koodi ajautuu _else_-haaraan. Siellä vastataan kyselyyn <i>404 not found_</i>

Jos id ei ole hyväksyttävässä muodossa, ajaudutaan _catch_:in avulla määriteltyyn virheidenkäsittelijään. Sopiva statuskoodi on [400 bad request](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) koska kyse on juuri siitä:

> <i>The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.</i>

Vastaukseen on lisätty myös hieman dataa kertomaan virheen syystä.

Promisejen yhteydessä kannattaa melkeinpä aina lisätä koodiin myös virhetilainteiden käsittely, muuten seurauksena on usein hämmentäviä vikoja.

Ei ole koskaan huono idea tulostaa poikkeuksen aiheuttanutta olioa konsoliin virheenkäsittelijässä:

```js
.catch(error => {
  console.log(error)
  response.status(400).send({ error: 'malformatted id' })
})
```

Virheenkäsittelijään joutumisen syy voi olla joku ihan muu kuin mitä on tullut alunperin ajatelleeksi. Jos virheen tulostaa konsoliin, voi säästyä pitkiltä ja turhauttavilta väärää asiaa debuggaavilta sessioilta.

Aina kun ohjelmoit ja projektissa on mukana backend <i>**tulee ehdottomasti koko ajan pitää silmällä backendin konsolin tulostuksia**</i>. Jos työskentelet pienellä näytöllä, riittää että konsolista on näkyvissä edes pieni kaistale:

![](../images/3/15b.png)

### Virheidenkäsittelyn keskittäminen middlewareen

Olemme kirjoittaneet poikkeuksen aiheuttavan virhetilanteen käsittelevän koodin muun koodin sekaan. Se on välillä ihan toimiva ratkaisu, mutta on myös tilanteita, joissa on järkevämpää keskittää virheiden käsittely yhteen paikkaan. Tästä on huomattava etu esim. jos virhetilanteiden yhteydessä virhen aiheuttaneen pyynnön tiedot logataan tai lähetetään johonkin virhediagnostiikkajärjestelmään, esim. [Sentryyn](https://sentry.io/welcome/). 

Muutetaan routen <i>/api/notes/:id</i> käsittelijää siten, että se <i>siirtää virhetilanteen käsittelyn eteenpäin</i> funktiolla <em>next</em> jonka se saa <i>kolmantena</i> parametrina:

```js
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note.toJSON())
      } else {
        response.status(204).end()
      }
    })
    .catch(error => next(error))
})
```

Eteenpäin siirrettävä virhe annetaan funktiolle <em>next</em> parametrina. Jos funktiota <em>next</em> kutsuttaisiin ilman parametria, käsittely siirtyisi ainoastaan eteenpäin seuraavaksi määritellylle routelle tai middlewarelle. Jos funktiota <em>next</em> kutsussa annetaan parametri, siirtyy käsittely <i>virheidenkäsittelymiddlewarelle</i>.

Expressin [virheidenkäsittelijät](https://expressjs.com/en/guide/error-handling.html) ovat middlewareja, joiden määrittelevällä funktiolla on <i>neljä parametria</i>. Virheidenkäsittelijämme näyttää seuraavalta:

```js
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)
```

Virhekäsittelijä tarkastaa onko kyse <i>CastError</i>-poikkeuksesta, eli virheellisestä olioid:stä, jos on, se lähettä pyynnön tehneelle selaimelle vastauksen käsittelijän parametrina olevan response-olion avulla. Muussa tapauksessa se siirtää funktiolla <em>next</em> virheen käsittelyn Expressin oletusarvoisen virheidenkäsittelijän hoidettavavksi.

### Muut operaatiot

Toteutetaan vielä jäljellä olevat operaatiot, eli yksittäisen muistiinpanon poisto ja muokkaus.

Poisto onnistuu helpoiten metodilla [findByIdAndRemove](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove):

```js
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
```

Vastauksena on statauskoodi <i>204 no content</i> molemmissa "onnistuneissa" tapauksissa, eli jos olio poistettiin tai olioa ei ollut mutta <i>id</i> oli periaatteessa oikea. Takaisinkutsun parametrin _result_ perusteella olisi mahdollisuus haarautua ja palauttaa tilanteissa eri statuskoodi jos sille on tarvetta. Mahdollinen poikkeus siirretään jälleen virheenkäsittelijälle.

Muistiinpanon tärkeyden muuttamisen mahdollistava olemassaolevan muistiinpanon päivitys onnistuu helposti metodilla [findByIdAndUpdate](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate). 

```js
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote.toJSON())
    })
    .catch(error => next(error))
})
```

Operaatio mahdollistaa myös muistiinpanon sisällön editoinnin. Päivämäärän muuttaminen ei ole mahdollista.

Huomaa, että metodin <em>findByIdAndUpdate</em> parametrina tulee antaa normaali Javascript-olio, eikä uuden olion luomisessa käytettävä <em>Note</em>-konstruktorifunktiolla luotu olio.

Pieni, mutta tärkeä detalji liittyen operaatioon <em>findByIdAndUpdate</em>. Oletusarvoisesti tapahtumankäsittelijä saa parametrikseen <em>updatedNote</em> päivitetyn olion [ennen muutosta](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate) olleen tilan. Lisäsimme operaatioon parametrin <code>{ new: true }</code> jotta saamme muuttuneen olion palautetuksi kutsujalle.

Backend vaikuttaa toimivan postmanista ja VS Code REST clientistä tehtyjen kokeilujen perusteella ja myös frontend toimii moitteettomasti tietokantaa käyttävän backendin kanssa.

Kun muutamme muistiinpanon tärkeyttä, tulostuu backendin konsoliin ikävä varoitus

![](../images/3/48.png)

Googlaamalla virheilmoitusta löytyy [ohje](https://stackoverflow.com/questions/52572852/deprecationwarning-collection-findandmodify-is-deprecated-use-findoneandupdate) ongelman korjaamiseen. Eli kuten [mongoosen dokumentaatio kehottaa](https://mongoosejs.com/docs/deprecations.html) lisätään tiedostoon <i>note.js</i> yksi rivi:

```js
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false) // highlight-line

// ...
  
module.exports = mongoose.model('Note', noteSchema) 
```

Sovelluksen tämän hetkinen koodi on kokonaisuudessaan [githubissa](https://github.com/fullstack-hy2019/part3-notes-backend/tree/part3-4), branchissa <i>part3-4</i>.

</div>

<div class="tasks">

### Tehtäviä

#### 3.15: puhelinluettelo ja tietokanta, step3

Muuta backendiä siten, että numerotietojen poistaminen päivittyy tietokantaan.

Varmista, että frontend toimii muutosten jälkeen.

#### 3.16: puhelinluettelo ja tietokanta, step3

Keskitä sovelluksen virheidenkäsittely middlewareen.

#### 3.17*: puhelinluettelo ja tietokanta, step4

Jos frontendissä annetaan numero henkilölle, joka on jo olemassa, päivittää frontend tehtävässä 2.18 tehdyn toteutuksen ansiosta tiedot uudella numerolla tekemällä HTTP PUT -pyynnön henkilön tietoja vastaavaan url:iin.

Laajenna backendisi käsittelemään tämä tilanne.

Varmista, että frontend toimii muutosten jälkeen.

#### 3.18*: puhelinluettelo ja tietokanta, step5

Päivitä myös polkujen <i>api/persons/:id</i> ja <i>info</i> käsittely, ja varmista niiden toimivuus suoraan selaimella, postmanilla tai VS Coden REST clientillä.

Selaimella tarkastellen yksittäisen numerotiedon tulisi näyttää seuraavalta:

![](../images/3/49.png)

</div>
