### (Semi-Live) Coding Suzanne's Head!

Experimental live-coding project using [blend4web](http://www.blend4web.org/) via clojurescript.

### Instructions

1. Make sure you have all the necessary prereqs for Clojure/Clojurescript, and the [Boot](http://www.boot-clj.com/) build tool.  Also have the cljs-blend4web .jar installed in your local maven cache, [instructions to install cljs-blend4web jar](https://github.com/mikebelanger/cljs-blend4web).

2. Download/Checkout this repo.

3. Get into a terminal emulator, and cd into the repo

4. To live-code, enter the following command (you should be in the same directory as the build.boot file)
```bash
boot b4w-live
```

5. Wait for it to download the deps/compile all the js, ignore the epic list of warnings the compiler gives you, and point your browser to `localhost:8000`.  Boom.

6. Open up `src/monkey_project/live.cljs`.  Specifically, the `actions` map.

7. Brace yourselves for some crazy.  Look the browser -- we are.....LLLLLLIVE!

Enjoy!

If you'd like to share on the web, I recommend using the `:advanced` compilation settings, or

`boot deploy`
