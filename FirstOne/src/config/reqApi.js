import HttpTools from './httpTools';

export default {
  scatterMap: urlPar => HttpTools.reqGet('https://13662005880-eval-prod.apigee.net/supperappdatav/map/pack', urlPar),
  productList:urlpar=>HttpTools.reqGet('../json/products.json', urlPar)
};