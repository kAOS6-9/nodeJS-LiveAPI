import dashboardSchema from '../models/schema.js'

const getData = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  const { select, sort, end_year, intensity, sector, topic, insight, url, region, start_year, impact, added, published, country, relevance, pestle, source, title, likelihood } = req.query
  const queryObject = {}

  if (end_year) {
    queryObject.end_year = end_year
  }

  if (intensity) {
    queryObject.intensity = intensity
  }

  if (sector) {
    queryObject.sector = sector
  }

  if (topic) {
    queryObject.topic = topic
  }

  if (insight) {
    queryObject.insight = insight
  }

  if (url) {
    queryObject.url = url
  }

  if (region) {
    queryObject.region = region
  }

  if (start_year) {
    queryObject.start_year = start_year
  }

  if (impact) {
    queryObject.impact = impact
  }

  if (added) {
    queryObject.added = added
  }

  if (published) {
    queryObject.published = published
  }

  if (country) {
    queryObject.country = country
  }

  if (relevance) {
    queryObject.relevance = relevance
  }

  if (pestle) {
    queryObject.pestle = pestle
  }

  if (source) {
    queryObject.source = source
  }

  if (title) {
    queryObject.title = title
  }

  if (likelihood) {
    queryObject.likelihood = likelihood
  }

  let apiData = dashboardSchema.find(queryObject)

  if (sort) {
    let sortFix = sort.replace(","," ")
    apiData = apiData.sort(sortFix)
  }

  if (select) {
    let selectFix = select.split(",").join(" ")
    apiData = apiData.select(selectFix)
  }

  console.log(queryObject)
  
  const Data = await apiData
  res.status(200).json({Data, Total: Data.length})
}

export { getData }