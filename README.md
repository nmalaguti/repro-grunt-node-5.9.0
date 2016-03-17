# Node finished with non-zero exit value 139

OS Version: Mac OS X El Capitan 10.11.3
Node Version: 5.9.0

Run `./loop.sh`.

It will run `./gradlew` until the command fails. It may pass several times. The expected failure output is:

```
:nodeSetup UP-TO-DATE
:npmSetup SKIPPED
:npmInstall UP-TO-DATE
:grunt_clean FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':grunt_clean'.
> Process 'command '/Users/nmalaguti/git/repro-grunt-node-5.9.0/.gradle/nodejs/node-v5.9.0-darwin-x64/bin/node'' finished with non-zero exit value 139

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

BUILD FAILED

Total time: 1.775 secs
```

You can try changing `build.gradle` to set the `node` version to `5.8.0`. This does not repro with `5.8.0`.
