import { moduleForModel, test } from 'ember-qunit';

moduleForModel('demographic', 'Unit | Model | demographic', {
  // Specify the other units that are required for this test.
  needs: ['model:demographic']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
