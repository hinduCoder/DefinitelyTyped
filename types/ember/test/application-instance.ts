import ApplicationInstance from '@ember/application/instance';

const appInstance = ApplicationInstance.create();
appInstance.register('some:injection', class Foo {});

appInstance.register('some:injection', class Foo {}, {
  singleton: true,
});

appInstance.register('some:injection', class Foo {}, {
  instantiate: false,
});

appInstance.register('some:injection', class Foo {}, {
    singleton: false,
    instantiate: true,
});

appInstance.factoryFor('router:main');
appInstance.lookup('route:basic');

appInstance.boot();

(async function() {
  await appInstance.boot();
}());
