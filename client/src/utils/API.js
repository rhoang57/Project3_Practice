import axios from "axios";

export default {
  // Get all of the unfinished pieces from the database
  getUnfinishedPieces() {
    return axios.get('/write');
  },
  getFinishedPieces() {
    return axios.get('/read');
  },
  createPiece(pieceData) {
    return axios.post('/write/new', pieceData);
  },
  createBlock(blockData) {
    return axios.post('/block/new',blockData)
  }
};

API.createPiece(pieceData)
  .then(res => {
    const blockData = {
      text: this.state.text,
      pieceId: res.data._id
    };
    API.createBlock(blockData);
  })
  .catch(err => console.log(err));