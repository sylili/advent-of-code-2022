module.exports = (input) => searchForMarker(input, 4);

const searchForMarker = (input, size) => {
  const freqTable = new FrequencyTable();

  for (let i = 0; i < input.length; i++) {
    const lastEl = input[i];
    const firstEl = input[i - size];

    freqTable.setElement(lastEl);
    freqTable.deleteElement(firstEl);

    if (size === freqTable.getSize()) {
      return i + 1;
    }
  }
};

class FrequencyTable {
  #map = new Map();

  setElement(item) {
    this.#map.set(item, this.#map.get(item) + 1 || 1);
  }

  deleteElement(item) {
    if (item) {
      if (this.#map.get(item) > 1) {
        this.#map.set(item, this.#map.get(item) - 1);
      } else {
        this.#map.delete(item);
      }
    }
  }

  getSize() {
    return this.#map.size;
  }
}

module.exports.searchForMarker = searchForMarker;
