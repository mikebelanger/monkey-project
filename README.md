### (Semi-Live) Coding Suzanne's Head!

Experimental live-coding project using [blend4web](http://www.blend4web.org/) via clojurescript.

### Instructions

1. Make sure you have all the necessary prereqs for Clojure/Clojurescript, and the [Boot](http://www.boot-clj.com/) build tool.  Also have the cljs-blend4web .jar installed in your local maven cache, [instructions to install cljs-blend4web jar](https://github.com/mikebelanger/cljs-blend4web).

* Download/Checkout this repo.

* Get into a terminal emulator, and cd into the repo

* Enter the following command (you should be in the same directory as the build.boot file)
```bash
boot save-n-build
```

* Wait for it to download the deps/compile all the js, and point your browser to `localhost:8000`.  Boom.

* Open up `src/monkey_project.core.cljs` in your very favorite editor.  Start messing around.  Look for the `rotate-cube` function definition and try messing with the variables by changing and then saving the file.

* Brace yourselves for some crazy.  Look the browser -- we are.....LLLLLLIVE!  Now we just need Bruce Buffer to say that.

> **Note:** If you've looked at your browser's console, you'll notice B4W throws an engine panic.  I have no idea why this happens.  No functionality appears to be affected, but I'm unsure.  If you know why it's panicking, please let me know!

### Optional REPL

There's a REPL option as well, I've yet to make it useful.  Maybe you know how.

1. With the above boot-process still running, open another terminal emulator window and get into this subdir's repo again.

* Dial in
```bash
boot repl -c
```

* Once it boots up, enter
```clojure
(start-repl)
```

* The repl should tell you it's waiting for a websocket connection.  Just refresh the localhost:8000 page, and it should connect.

* From there, you can start typing stuff in!  To get info about the project, make sure your in the project namespace :

```clojure
(ns monkey-project.core)
```

Enjoy!
