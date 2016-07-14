# Ember CLI Notify
[![Build Status](https://travis-ci.org/sumn2u/ember-cli-notify.svg?branch=master)](https://travis-ci.org/sumn2u/ember-cli-notify.svg?branch=master)
Ember add on for Notification
# Installation

Include the library as an [NPM](https://www.npmjs.com/) dependency, from within an [ember-cli](http://www.ember-cli.com/) app.

```
ember install ember-cli-notify
```

*If using ember-cli 0.1.5 – 0.2.3*

```
ember install:addon ember-cli-notify
```

Run the library's blueprint to pull in its Bower dependencies. This only needs to be done once.

```
ember generate ember-cli-notify
```
### Controller
```javascript
export default Ember.Controller.extend({
	notify: Ember.inject.service('ember-cli-notify')
});
```
