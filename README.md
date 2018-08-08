#

![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# React :heart: React Native :yellow_heart: Express :green_heart: MongoDB

[![Video](https://img.youtube.com/vi/EZNLq3SVdv4/0.jpg)](https://www.youtube.com/watch?v=EZNLq3SVdv4)

## __1. Setup MongoDB Database__

- Activate MongoDB server, then create a __*dojo*__ database with a __*ninja*__ collection. Don't forget to create your database user:

    ```bash
    $ use dojo
    
    $ db.createUser({
        user: 'your_username',
        pwd: 'your_password',
        roles: ['readWrite', 'dbAdmin'] 
        })

    $ db.createCollection('ninja')
    ```

- Insert some data, as initial data, into __*ninja*__ collection:

    ```bash
    $ db.ninja.insert([
        {nama: 'Andi', usia: 22},
        {nama: 'Budi', usia: 23}
        ])
    
    $ db.ninja.find().pretty();
    ```
- __Done!__ :thumbsup:

#

## __2. Setup Node.js Backend Project__

- Clone this repo, go to __*Express_Backend*__ folder then install all dependencies:

    ```bash
    $ git clone https://github.com/LintangWisesa/React_RNative_Express_MongoDB.git

    $ cd React_RNative_Express_MongoDB/Express_Backend

    $ npm i
    ```

- Open __*app.js*__ & edit this line to configure your database:
    
    ```javascript
    var url = 'mongodb://user:password@localhost:27017/dojo';
    ```

- Save it, then run your backend project. It will run at __*localhost:3210*__:

    ```bash
    $ node app
    ```

- __Done!__ :thumbsup:

#

## __3. Setup React Frontend Project__

- Go to __*React_Frontend*__ folder, install all dependencies then run this project:

    ```bash
    $ cd React_RNative_Express_MongoDB/React_Frontend

    $ npm i

    $ npm start
    ```

- It will run at __*localhost:3000*__ & open in browser automatically! __Done!__ :thumbsup:

#

## __4. Setup React Native Android Project__

- Activate your __*AVD (Android Virtual Device)*__. In this project, I'm using __*Genymotion*__. It's much lighter than Android Studio's AVD.

- Go to __*RNative_Mobile*__ folder, install all dependencies then run this project:

    ```bash
    $ cd React_RNative_Express_MongoDB/RNative_Mobile

    $ npm i

    $ react-native run-android
    ```

- __Done!__ :thumbsup:

#

__See also:__
- [React :heart: React Native :yellow_heart: Express :green_heart: MongoDB](https://github.com/LintangWisesa/React_RNative_Express_MongoDB)
- [React :heart: React Native :yellow_heart: Express :green_heart: MySQL](https://github.com/LintangWisesa/React_RNative_Express_MySQL)
- [React :heart: React Native :yellow_heart: Express :green_heart: PostgreSQL](https://github.com/LintangWisesa/React_RNative_Express_PostgreSQL)

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) |
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)