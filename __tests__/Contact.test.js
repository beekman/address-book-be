const mongoose = require('mongoose');
const Entry = require('../lib/models/Entry');

describe('Contact model', () => {
  it('requires a name', () => {
    const entry = new Entry({
      address: '555 Test Lane',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States',
      zip: '98765',
      category: 'Work'
    });

    const { errors } = entry.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('requires an address', () => {
    const entry = new Entry({
      name: 'Testy McTesterson',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States',
      zip: '98765',
      category: 'Work'
    });

    const { errors } = entry.validateSync();

    expect(errors.address.message).toEqual('Path `address` is required.');
  });

  it('requires a city', () => {
    const entry = new Entry({
      address: '555 Test Lane',
      name: 'Testy McTesterson',
      state: 'California',
      country: 'United States',
      zip: '98765',
      category: 'Work'
    });

    const { errors } = entry.validateSync();

    expect(errors.city.message).toEqual('Path `city` is required.');
  });

  it('requires a ZIP code', () => {
    const entry = new Entry({
      address: '555 Test Lane',
      name: 'Testy McTesterson',
      city: 'Los Angeles',
      state: 'California',
      country: 'United States',
      category: 'Work'
    });

    const { errors } = entry.validateSync();

    expect(errors.zip.message).toEqual('Path `zip` is required.');
  });
});

module.exports = mongoose.model('Contact', schema);
