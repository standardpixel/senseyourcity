(function(STPX){"use strict";

function IndexController() {

  var data         = [{"temperature":17.3200735501872,"light":80.3037110616656,"airquality_raw":19.9365163876527,"sound":1787.13768806951,"humidity":47.7743288655789,"dust":1066.42338053613,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T00:00:00.000Z"},{"temperature":16.5669028350104,"light":37.1851153533429,"airquality_raw":19.8544804037838,"sound":1688.18913481886,"humidity":49.9667815489178,"dust":1001.18984916783,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T01:00:00.000Z"},{"temperature":15.8167045454545,"light":1.48484848484848,"airquality_raw":19.5945336826916,"sound":1776.58481051113,"humidity":50.9987060454166,"dust":1301.3440430622,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T02:00:00.000Z"},{"temperature":15.5701388888889,"light":0,"airquality_raw":20.075,"sound":1772.55555555556,"humidity":51.6638888888889,"dust":1556.84011111111,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T03:00:00.000Z"},{"temperature":15.2719607843137,"light":0,"airquality_raw":19.3103641456583,"sound":1691.60784313725,"humidity":50.6349369747899,"dust":1459.80838305322,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T04:00:00.000Z"},{"temperature":15.3011574074074,"light":0.343137254901961,"airquality_raw":19.3871010525422,"sound":1613.78107546049,"humidity":50.2443729663582,"dust":1341.8294820509,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T05:00:00.000Z"},{"temperature":15.1630303030303,"light":0,"airquality_raw":19.2195461104552,"sound":1689.12682670865,"humidity":50.56463728191,"dust":1377.44574432638,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T06:00:00.000Z"},{"temperature":15.0788763864131,"light":0.35,"airquality_raw":19.2076419359508,"sound":1758.56446973506,"humidity":51.3845387414873,"dust":1173.84772716275,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T07:00:00.000Z"},{"temperature":14.9608837434495,"light":0,"airquality_raw":19.3316254651781,"sound":1633.27001341738,"humidity":52.5459829814435,"dust":1029.20822455128,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T08:00:00.000Z"},{"temperature":14.8560464292043,"light":0,"airquality_raw":19.4883529381981,"sound":1671.90626030316,"humidity":54.3361643078284,"dust":1299.49876111923,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T09:00:00.000Z"},{"temperature":15.1523377085877,"light":0.166666666666667,"airquality_raw":19.7308859441212,"sound":1620.01395771984,"humidity":54.0343782170988,"dust":1152.83195906354,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T10:00:00.000Z"},{"temperature":15.1963036963037,"light":0.363636363636364,"airquality_raw":19.7313898222989,"sound":1673.57575757576,"humidity":53.3795356158993,"dust":1301.1159279357,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T11:00:00.000Z"},{"temperature":14.8506795634921,"light":0.933333333333333,"airquality_raw":19.6145833333333,"sound":1745.35873015873,"humidity":52.7951554232804,"dust":1141.16134986772,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T12:00:00.000Z"},{"temperature":15.007003968254,"light":1.24444444444444,"airquality_raw":19.5791666666667,"sound":1546.30634920635,"humidity":51.7761507936508,"dust":1256.72334126984,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T13:00:00.000Z"},{"temperature":14.8934454939,"light":5.21652892561983,"airquality_raw":19.7884199134199,"sound":1647.78103109012,"humidity":52.4954397874852,"dust":1237.68657939787,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T14:00:00.000Z"},{"temperature":14.9830357142857,"light":46.8293650793651,"airquality_raw":20.2474702380952,"sound":1650.65734126984,"humidity":52.5654017857143,"dust":1163.0878844246,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T15:00:00.000Z"},{"temperature":15.5043945003303,"light":89.6918003565062,"airquality_raw":20.6372535070396,"sound":1628.26628499249,"humidity":51.1087311084637,"dust":1215.69289551595,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T16:00:00.000Z"},{"temperature":16.8617273442931,"light":153.992346104188,"airquality_raw":20.6880347722453,"sound":1635.1162214978,"humidity":45.8198080282291,"dust":1349.61718898353,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T17:00:00.000Z"},{"temperature":17.530695970696,"light":220.914880952381,"airquality_raw":21.6967185592186,"sound":1727.35494505495,"humidity":43.3122039072039,"dust":1138.95735882173,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T18:00:00.000Z"},{"temperature":17.8137924112924,"light":311.747762885263,"airquality_raw":20.9268467643468,"sound":1612.60214600215,"humidity":41.7384731472231,"dust":1203.38933269046,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T19:00:00.000Z"},{"temperature":18.873927335291,"light":2105.44766092493,"airquality_raw":20.9545454545455,"sound":1732.30630985176,"humidity":40.0950350154896,"dust":1180.57372344827,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T20:00:00.000Z"},{"temperature":26.7523258318479,"light":4082.67148392185,"airquality_raw":23.0082371332371,"sound":1777.26416970829,"humidity":27.2996538388083,"dust":1279.92256247347,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T21:00:00.000Z"},{"temperature":21.7604743867244,"light":276.56544011544,"airquality_raw":22.0862193362193,"sound":1661.56702741703,"humidity":32.4224098124098,"dust":1076.58751569264,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T22:00:00.000Z"},{"temperature":20.5625,"light":225.485714285714,"airquality_raw":21.6464285714286,"sound":1674.41428571429,"humidity":33.1690476190476,"dust":1467.92164285714,"source":"ci4yfbbdb000d03zzoq8kjdl0","timestamp":"2015-02-28T23:00:00.000Z"},
  {
    "temperature": "85",
    "light": "85",
    "airquality_raw": "85",
    "sound": "85",
    "humidity": "85",
    "dust": "85",
    "city": "Bangalore",
    "timestamp": "2015-01-31T08:00:00.000Z"
  },
  {
    "temperature": "87",
    "light": "87",
    "airquality_raw": "87",
    "sound": "87",
    "humidity": "87",
    "dust": "87",
    "city": "Bangalore",
    "timestamp": "2015-01-31T09:00:00.000Z"
  },
  {
    "temperature": "73",
    "light": "73",
    "airquality_raw": "73",
    "sound": "73",
    "humidity": "73",
    "dust": "73",
    "city": "Bangalore",
    "timestamp": "2015-01-31T10:00:00.000Z"
  },
  {
    "temperature": "67",
    "light": "67",
    "airquality_raw": "67",
    "sound": "67",
    "humidity": "67",
    "dust": "67",
    "city": "Bangalore",
    "timestamp": "2015-01-31T11:00:00.000Z"
  },
  {
    "temperature": "82",
    "light": "82",
    "airquality_raw": "82",
    "sound": "82",
    "humidity": "82",
    "dust": "82",
    "city": "Bangalore",
    "timestamp": "2015-01-31T12:00:00.000Z"
  },
  {
    "temperature": "86",
    "light": "86",
    "airquality_raw": "86",
    "sound": "86",
    "humidity": "86",
    "dust": "86",
    "city": "Bangalore",
    "timestamp": "2015-01-31T13:00:00.000Z"
  },
  {
    "temperature": "89",
    "light": "89",
    "airquality_raw": "89",
    "sound": "89",
    "humidity": "89",
    "dust": "89",
    "city": "Bangalore",
    "timestamp": "2015-01-31T14:00:00.000Z"
  },
  {
    "temperature": "91",
    "light": "91",
    "airquality_raw": "91",
    "sound": "91",
    "humidity": "91",
    "dust": "91",
    "city": "Bangalore",
    "timestamp": "2015-01-31T15:00:00.000Z"
  },
  {
    "temperature": "87",
    "light": "87",
    "airquality_raw": "87",
    "sound": "87",
    "humidity": "87",
    "dust": "87",
    "city": "Bangalore",
    "timestamp": "2015-01-31T16:00:00.000Z"
  },
  {
    "temperature": "88",
    "light": "88",
    "airquality_raw": "88",
    "sound": "88",
    "humidity": "88",
    "dust": "88",
    "city": "Bangalore",
    "timestamp": "2015-01-31T17:00:00.000Z"
  },
  {
    "temperature": "89",
    "light": "89",
    "airquality_raw": "89",
    "sound": "89",
    "humidity": "89",
    "dust": "89",
    "city": "Bangalore",
    "timestamp": "2015-01-31T18:00:00.000Z"
  },
  {
    "temperature": "93",
    "light": "93",
    "airquality_raw": "93",
    "sound": "93",
    "humidity": "93",
    "dust": "93",
    "city": "Bangalore",
    "timestamp": "2015-01-31T19:00:00.000Z"
  },
  {
    "temperature": "94",
    "light": "94",
    "airquality_raw": "94",
    "sound": "94",
    "humidity": "94",
    "dust": "94",
    "city": "Bangalore",
    "timestamp": "2015-01-31T20:00:00.000Z"
  },
  {
    "temperature": "93",
    "light": "93",
    "airquality_raw": "93",
    "sound": "93",
    "humidity": "93",
    "dust": "93",
    "city": "Bangalore",
    "timestamp": "2015-01-31T21:00:00.000Z"
  },
  {
    "temperature": "92",
    "light": "92",
    "airquality_raw": "92",
    "sound": "92",
    "humidity": "92",
    "dust": "92",
    "city": "Bangalore",
    "timestamp": "2015-01-31T22:00:00.000Z"
  },
  {
    "temperature": "93",
    "light": "93",
    "airquality_raw": "93",
    "sound": "93",
    "humidity": "93",
    "dust": "93",
    "city": "Bangalore",
    "timestamp": "2015-01-31T23:00:00.000Z"
  },
  {
    "temperature": "92",
    "light": "92",
    "airquality_raw": "92",
    "sound": "92",
    "humidity": "92",
    "dust": "92",
    "city": "Bangalore",
    "timestamp": "2015-02-01T00:00:00.000Z"
  },
  {
    "temperature": "95",
    "light": "95",
    "airquality_raw": "95",
    "sound": "95",
    "humidity": "95",
    "dust": "95",
    "city": "Bangalore",
    "timestamp": "2015-02-01T01:00:00.000Z"
  },
  {
    "temperature": "95",
    "light": "95",
    "airquality_raw": "95",
    "sound": "95",
    "humidity": "95",
    "dust": "95",
    "city": "Bangalore",
    "timestamp": "2015-02-01T02:00:00.000Z"
  },
  {
    "temperature": "93",
    "light": "93",
    "airquality_raw": "93",
    "sound": "93",
    "humidity": "93",
    "dust": "93",
    "city": "Bangalore",
    "timestamp": "2015-02-01T03:00:00.000Z"
  },
  {
    "temperature": "90",
    "light": "90",
    "airquality_raw": "90",
    "sound": "90",
    "humidity": "90",
    "dust": "90",
    "city": "Bangalore",
    "timestamp": "2015-02-01T04:00:00.000Z"
  },
  {
    "temperature": "87",
    "light": "87",
    "airquality_raw": "87",
    "sound": "87",
    "humidity": "87",
    "dust": "87",
    "city": "Bangalore",
    "timestamp": "2015-02-01T05:00:00.000Z"
  },
  {
    "temperature": "90",
    "light": "90",
    "airquality_raw": "90",
    "sound": "90",
    "humidity": "90",
    "dust": "90",
    "city": "Bangalore",
    "timestamp": "2015-02-01T06:00:00.000Z"
  },
  {
    "temperature": "90",
    "light": "90",
    "airquality_raw": "90",
    "sound": "90",
    "humidity": "90",
    "dust": "90",
    "city": "Bangalore",
    "timestamp": "2015-02-01T07:00:00.000Z"
  },
  {
      "temperature": "100",
      "light": "100",
      "airquality_raw": "100",
      "sound": "100",
      "humidity": "100",
      "dust": "100",
      "city": "Boston",
      "timestamp": "2015-01-31T08:00:00.000Z"
    },
    {
      "temperature": "106",
      "light": "106",
      "airquality_raw": "106",
      "sound": "106",
      "humidity": "106",
      "dust": "106",
      "city": "Boston",
      "timestamp": "2015-01-31T09:00:00.000Z"
    },
    {
      "temperature": "105",
      "light": "105",
      "airquality_raw": "105",
      "sound": "105",
      "humidity": "105",
      "dust": "105",
      "city": "Boston",
      "timestamp": "2015-01-31T10:00:00.000Z"
    },
    {
      "temperature": "100",
      "light": "100",
      "airquality_raw": "100",
      "sound": "100",
      "humidity": "100",
      "dust": "100",
      "city": "Boston",
      "timestamp": "2015-01-31T11:00:00.000Z"
    },
    {
      "temperature": "97",
      "light": "97",
      "airquality_raw": "97",
      "sound": "97",
      "humidity": "97",
      "dust": "97",
      "city": "Boston",
      "timestamp": "2015-01-31T12:00:00.000Z"
    },
    {
      "temperature": "112",
      "light": "112",
      "airquality_raw": "112",
      "sound": "112",
      "humidity": "112",
      "dust": "112",
      "city": "Boston",
      "timestamp": "2015-01-31T13:00:00.000Z"
    },
    {
      "temperature": "110",
      "light": "110",
      "airquality_raw": "110",
      "sound": "110",
      "humidity": "110",
      "dust": "110",
      "city": "Boston",
      "timestamp": "2015-01-31T14:00:00.000Z"
    },
    {
      "temperature": "122",
      "light": "122",
      "airquality_raw": "122",
      "sound": "122",
      "humidity": "122",
      "dust": "122",
      "city": "Boston",
      "timestamp": "2015-01-31T15:00:00.000Z"
    },
    {
      "temperature": "123",
      "light": "123",
      "airquality_raw": "123",
      "sound": "123",
      "humidity": "123",
      "dust": "123",
      "city": "Boston",
      "timestamp": "2015-01-31T16:00:00.000Z"
    },
    {
      "temperature": "113",
      "light": "113",
      "airquality_raw": "113",
      "sound": "113",
      "humidity": "113",
      "dust": "113",
      "city": "Boston",
      "timestamp": "2015-01-31T17:00:00.000Z"
    },
    {
      "temperature": "123",
      "light": "123",
      "airquality_raw": "123",
      "sound": "123",
      "humidity": "123",
      "dust": "123",
      "city": "Boston",
      "timestamp": "2015-01-31T18:00:00.000Z"
    },
    {
      "temperature": "127",
      "light": "127",
      "airquality_raw": "127",
      "sound": "127",
      "humidity": "127",
      "dust": "127",
      "city": "Boston",
      "timestamp": "2015-01-31T19:00:00.000Z"
    },
    {
      "temperature": "124",
      "light": "124",
      "airquality_raw": "124",
      "sound": "124",
      "humidity": "124",
      "dust": "124",
      "city": "Boston",
      "timestamp": "2015-01-31T20:00:00.000Z"
    },
    {
      "temperature": "111",
      "light": "111",
      "airquality_raw": "111",
      "sound": "111",
      "humidity": "111",
      "dust": "111",
      "city": "Boston",
      "timestamp": "2015-01-31T21:00:00.000Z"
    },
    {
      "temperature": "112",
      "light": "112",
      "airquality_raw": "112",
      "sound": "112",
      "humidity": "112",
      "dust": "112",
      "city": "Boston",
      "timestamp": "2015-01-31T22:00:00.000Z"
    },
    {
      "temperature": "109",
      "light": "109",
      "airquality_raw": "109",
      "sound": "109",
      "humidity": "109",
      "dust": "109",
      "city": "Boston",
      "timestamp": "2015-01-31T23:00:00.000Z"
    },
    {
      "temperature": "108",
      "light": "108",
      "airquality_raw": "108",
      "sound": "108",
      "humidity": "108",
      "dust": "108",
      "city": "Boston",
      "timestamp": "2015-02-01T00:00:00.000Z"
    },
    {
      "temperature": "104",
      "light": "104",
      "airquality_raw": "104",
      "sound": "104",
      "humidity": "104",
      "dust": "104",
      "city": "Boston",
      "timestamp": "2015-02-01T01:00:00.000Z"
    },
    {
      "temperature": "107",
      "light": "107",
      "airquality_raw": "107",
      "sound": "107",
      "humidity": "107",
      "dust": "107",
      "city": "Boston",
      "timestamp": "2015-02-01T02:00:00.000Z"
    },
    {
      "temperature": "114",
      "light": "114",
      "airquality_raw": "114",
      "sound": "114",
      "humidity": "114",
      "dust": "114",
      "city": "Boston",
      "timestamp": "2015-02-01T03:00:00.000Z"
    },
    {
      "temperature": "110",
      "light": "110",
      "airquality_raw": "110",
      "sound": "110",
      "humidity": "110",
      "dust": "110",
      "city": "Boston",
      "timestamp": "2015-02-01T04:00:00.000Z"
    },
    {
      "temperature": "114",
      "light": "114",
      "airquality_raw": "114",
      "sound": "114",
      "humidity": "114",
      "dust": "114",
      "city": "Boston",
      "timestamp": "2015-02-01T05:00:00.000Z"
    },
    {
      "temperature": "117",
      "light": "117",
      "airquality_raw": "117",
      "sound": "117",
      "humidity": "117",
      "dust": "117",
      "city": "Boston",
      "timestamp": "2015-02-01T06:00:00.000Z"
    },
    {
      "temperature": "118",
      "light": "118",
      "airquality_raw": "118",
      "sound": "118",
      "humidity": "118",
      "dust": "118",
      "city": "Boston",
      "timestamp": "2015-02-01T07:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T08:00:00.000Z"
    },
    {
      "temperature": "131",
      "light": "131",
      "airquality_raw": "131",
      "sound": "131",
      "humidity": "131",
      "dust": "131",
      "city": "Geneva",
      "timestamp": "2015-01-31T09:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T10:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T11:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T12:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T13:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T14:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T15:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T16:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T17:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T18:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T19:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-01-31T20:00:00.000Z"
    },
    {
      "temperature": "124",
      "light": "124",
      "airquality_raw": "124",
      "sound": "124",
      "humidity": "124",
      "dust": "124",
      "city": "Geneva",
      "timestamp": "2015-01-31T21:00:00.000Z"
    },
    {
      "temperature": "118",
      "light": "118",
      "airquality_raw": "118",
      "sound": "118",
      "humidity": "118",
      "dust": "118",
      "city": "Geneva",
      "timestamp": "2015-01-31T22:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-01-31T23:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T00:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T01:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T02:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T03:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T04:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T05:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Geneva",
      "timestamp": "2015-02-01T06:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Geneva",
      "timestamp": "2015-02-01T07:00:00.000Z"
    },
    {
      "temperature": "144",
      "light": "144",
      "airquality_raw": "144",
      "sound": "144",
      "humidity": "144",
      "dust": "144",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T08:00:00.000Z"
    },
    {
      "temperature": "144",
      "light": "144",
      "airquality_raw": "144",
      "sound": "144",
      "humidity": "144",
      "dust": "144",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T09:00:00.000Z"
    },
    {
      "temperature": "133",
      "light": "133",
      "airquality_raw": "133",
      "sound": "133",
      "humidity": "133",
      "dust": "133",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T10:00:00.000Z"
    },
    {
      "temperature": "126",
      "light": "126",
      "airquality_raw": "126",
      "sound": "126",
      "humidity": "126",
      "dust": "126",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T11:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T12:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T13:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T14:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T15:00:00.000Z"
    },
    {
      "temperature": "112",
      "light": "112",
      "airquality_raw": "112",
      "sound": "112",
      "humidity": "112",
      "dust": "112",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T16:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T17:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T18:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T19:00:00.000Z"
    },
    {
      "temperature": "129",
      "light": "129",
      "airquality_raw": "129",
      "sound": "129",
      "humidity": "129",
      "dust": "129",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T20:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T21:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T22:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-01-31T23:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T00:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T01:00:00.000Z"
    },
    {
      "temperature": "123",
      "light": "123",
      "airquality_raw": "123",
      "sound": "123",
      "humidity": "123",
      "dust": "123",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T02:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T03:00:00.000Z"
    },
    {
      "temperature": "131",
      "light": "131",
      "airquality_raw": "131",
      "sound": "131",
      "humidity": "131",
      "dust": "131",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T04:00:00.000Z"
    },
    {
      "temperature": "123",
      "light": "123",
      "airquality_raw": "123",
      "sound": "123",
      "humidity": "123",
      "dust": "123",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T05:00:00.000Z"
    },
    {
      "temperature": "140",
      "light": "140",
      "airquality_raw": "140",
      "sound": "140",
      "humidity": "140",
      "dust": "140",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T06:00:00.000Z"
    },
    {
      "temperature": "142",
      "light": "142",
      "airquality_raw": "142",
      "sound": "142",
      "humidity": "142",
      "dust": "142",
      "city": "Rio de Janeiro",
      "timestamp": "2015-02-01T07:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Shanghai",
      "timestamp": "2015-01-31T08:00:00.000Z"
    },
    {
      "temperature": "115",
      "light": "115",
      "airquality_raw": "115",
      "sound": "115",
      "humidity": "115",
      "dust": "115",
      "city": "Shanghai",
      "timestamp": "2015-01-31T09:00:00.000Z"
    },
    {
      "temperature": "111",
      "light": "111",
      "airquality_raw": "111",
      "sound": "111",
      "humidity": "111",
      "dust": "111",
      "city": "Shanghai",
      "timestamp": "2015-01-31T10:00:00.000Z"
    },
    {
      "temperature": "114",
      "light": "114",
      "airquality_raw": "114",
      "sound": "114",
      "humidity": "114",
      "dust": "114",
      "city": "Shanghai",
      "timestamp": "2015-01-31T11:00:00.000Z"
    },
    {
      "temperature": "126",
      "light": "126",
      "airquality_raw": "126",
      "sound": "126",
      "humidity": "126",
      "dust": "126",
      "city": "Shanghai",
      "timestamp": "2015-01-31T12:00:00.000Z"
    },
    {
      "temperature": "132",
      "light": "132",
      "airquality_raw": "132",
      "sound": "132",
      "humidity": "132",
      "dust": "132",
      "city": "Shanghai",
      "timestamp": "2015-01-31T13:00:00.000Z"
    },
    {
      "temperature": "115",
      "light": "115",
      "airquality_raw": "115",
      "sound": "115",
      "humidity": "115",
      "dust": "115",
      "city": "Shanghai",
      "timestamp": "2015-01-31T14:00:00.000Z"
    },
    {
      "temperature": "113",
      "light": "113",
      "airquality_raw": "113",
      "sound": "113",
      "humidity": "113",
      "dust": "113",
      "city": "Shanghai",
      "timestamp": "2015-01-31T15:00:00.000Z"
    },
    {
      "temperature": "111",
      "light": "111",
      "airquality_raw": "111",
      "sound": "111",
      "humidity": "111",
      "dust": "111",
      "city": "Shanghai",
      "timestamp": "2015-01-31T16:00:00.000Z"
    },
    {
      "temperature": "108",
      "light": "108",
      "airquality_raw": "108",
      "sound": "108",
      "humidity": "108",
      "dust": "108",
      "city": "Shanghai",
      "timestamp": "2015-01-31T17:00:00.000Z"
    },
    {
      "temperature": "109",
      "light": "109",
      "airquality_raw": "109",
      "sound": "109",
      "humidity": "109",
      "dust": "109",
      "city": "Shanghai",
      "timestamp": "2015-01-31T18:00:00.000Z"
    },
    {
      "temperature": "114",
      "light": "114",
      "airquality_raw": "114",
      "sound": "114",
      "humidity": "114",
      "dust": "114",
      "city": "Shanghai",
      "timestamp": "2015-01-31T19:00:00.000Z"
    },
    {
      "temperature": "119",
      "light": "119",
      "airquality_raw": "119",
      "sound": "119",
      "humidity": "119",
      "dust": "119",
      "city": "Shanghai",
      "timestamp": "2015-01-31T20:00:00.000Z"
    },
    {
      "temperature": "115",
      "light": "115",
      "airquality_raw": "115",
      "sound": "115",
      "humidity": "115",
      "dust": "115",
      "city": "Shanghai",
      "timestamp": "2015-01-31T21:00:00.000Z"
    },
    {
      "temperature": "115",
      "light": "115",
      "airquality_raw": "115",
      "sound": "115",
      "humidity": "115",
      "dust": "115",
      "city": "Shanghai",
      "timestamp": "2015-01-31T22:00:00.000Z"
    },
    {
      "temperature": "114",
      "light": "114",
      "airquality_raw": "114",
      "sound": "114",
      "humidity": "114",
      "dust": "114",
      "city": "Shanghai",
      "timestamp": "2015-01-31T23:00:00.000Z"
    },
    {
      "temperature": "113",
      "light": "113",
      "airquality_raw": "113",
      "sound": "113",
      "humidity": "113",
      "dust": "113",
      "city": "Shanghai",
      "timestamp": "2015-02-01T00:00:00.000Z"
    },
    {
      "temperature": "115",
      "light": "115",
      "airquality_raw": "115",
      "sound": "115",
      "humidity": "115",
      "dust": "115",
      "city": "Shanghai",
      "timestamp": "2015-02-01T01:00:00.000Z"
    },
    {
      "temperature": "112",
      "light": "112",
      "airquality_raw": "112",
      "sound": "112",
      "humidity": "112",
      "dust": "112",
      "city": "Shanghai",
      "timestamp": "2015-02-01T02:00:00.000Z"
    },
    {
      "temperature": "119",
      "light": "119",
      "airquality_raw": "119",
      "sound": "119",
      "humidity": "119",
      "dust": "119",
      "city": "Shanghai",
      "timestamp": "2015-02-01T03:00:00.000Z"
    },
    {
      "temperature": "124",
      "light": "124",
      "airquality_raw": "124",
      "sound": "124",
      "humidity": "124",
      "dust": "124",
      "city": "Shanghai",
      "timestamp": "2015-02-01T04:00:00.000Z"
    },
    {
      "temperature": "120",
      "light": "120",
      "airquality_raw": "120",
      "sound": "120",
      "humidity": "120",
      "dust": "120",
      "city": "Shanghai",
      "timestamp": "2015-02-01T05:00:00.000Z"
    },
    {
      "temperature": "124",
      "light": "124",
      "airquality_raw": "124",
      "sound": "124",
      "humidity": "124",
      "dust": "124",
      "city": "Shanghai",
      "timestamp": "2015-02-01T06:00:00.000Z"
    },
    {
      "temperature": "131",
      "light": "131",
      "airquality_raw": "131",
      "sound": "131",
      "humidity": "131",
      "dust": "131",
      "city": "Shanghai",
      "timestamp": "2015-02-01T07:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T08:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T09:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T10:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T11:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T12:00:00.000Z"
    },
    {
      "temperature": "161",
      "light": "161",
      "airquality_raw": "161",
      "sound": "161",
      "humidity": "161",
      "dust": "161",
      "city": "Singapore",
      "timestamp": "2015-01-31T13:00:00.000Z"
    },
    {
      "temperature": "163",
      "light": "163",
      "airquality_raw": "163",
      "sound": "163",
      "humidity": "163",
      "dust": "163",
      "city": "Singapore",
      "timestamp": "2015-01-31T14:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T15:00:00.000Z"
    },
    {
      "temperature": "155",
      "light": "155",
      "airquality_raw": "155",
      "sound": "155",
      "humidity": "155",
      "dust": "155",
      "city": "Singapore",
      "timestamp": "2015-01-31T16:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T17:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T18:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T19:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T20:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T21:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-01-31T22:00:00.000Z"
    },
    {
      "temperature": "154",
      "light": "154",
      "airquality_raw": "154",
      "sound": "154",
      "humidity": "154",
      "dust": "154",
      "city": "Singapore",
      "timestamp": "2015-01-31T23:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-02-01T00:00:00.000Z"
    },
    {
      "temperature": "151",
      "light": "151",
      "airquality_raw": "151",
      "sound": "151",
      "humidity": "151",
      "dust": "151",
      "city": "Singapore",
      "timestamp": "2015-02-01T01:00:00.000Z"
    },
    {
      "temperature": "145",
      "light": "145",
      "airquality_raw": "145",
      "sound": "145",
      "humidity": "145",
      "dust": "145",
      "city": "Singapore",
      "timestamp": "2015-02-01T02:00:00.000Z"
    },
    {
      "temperature": "144",
      "light": "144",
      "airquality_raw": "144",
      "sound": "144",
      "humidity": "144",
      "dust": "144",
      "city": "Singapore",
      "timestamp": "2015-02-01T03:00:00.000Z"
    },
    {
      "temperature": "144",
      "light": "144",
      "airquality_raw": "144",
      "sound": "144",
      "humidity": "144",
      "dust": "144",
      "city": "Singapore",
      "timestamp": "2015-02-01T04:00:00.000Z"
    },
    {
      "temperature": "144",
      "light": "144",
      "airquality_raw": "144",
      "sound": "144",
      "humidity": "144",
      "dust": "144",
      "city": "Singapore",
      "timestamp": "2015-02-01T05:00:00.000Z"
    },
    {
      "temperature": "150",
      "light": "150",
      "airquality_raw": "150",
      "sound": "150",
      "humidity": "150",
      "dust": "150",
      "city": "Singapore",
      "timestamp": "2015-02-01T06:00:00.000Z"
    },
    {
      "temperature": "156",
      "light": "156",
      "airquality_raw": "156",
      "sound": "156",
      "humidity": "156",
      "dust": "156",
      "city": "Singapore",
      "timestamp": "2015-02-01T07:00:00.000Z"
    }
  ],
      sourceLookup = {
        "ci4yfbbdb000d03zzoq8kjdl0" : {
          "location" : [-122.430467, 37.767358]
        },
        "ci4yhy9yy000f03zznho5nm7c" : {
          "location" : [-122.428851, 37.73914]
        },
        "ci4yyrdqi000j03zz8ylornqd" : {
          "location" : [-122.402767, 37.791326]
        },
        "ci4vy1tfy000m02s7v29jkkx4" : {
          "location" : [-122.396751, 37.802468]
        },
        "ci4lnqzte000002xpokc9d25v" : {
          "location" : [-122.4032625, 37.7962173]
        },
        "ci4usvy81000302s7whpk8qlp" : {
          "location" : [-122.418503, 37.754392]
        },
        "ci4usvryz000202s7llxjafaf" : {
          "location" : [-122.4110293, 37.7874046]
        },
        "ci4xcxxgc000n02tci92gpvi6" : {
          "location" : [-122.415348, 37.758871]
        },
        "ci4usss1t000102s7hkg0rpqg" : {
          "location" : [-122.42, 37.7648]
        },
        "ci4tmxpz8000002w7au38un50" : {
          "location" : [-122.413649, 37.775641]
        },
        "ci4yf50s5000c03zzt4h2tnsq" : {
          "location" : [-122.403045, 37.804427]
        },
        "ci4ut5zu5000402s7g6nihdn0" : {
          "location" : [-122.423758,37.747894]
        }
      };

  function initMap() {
    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });

    var map = L.map('map', {
        scrollWheelZoom: false,
        center: [0,0],
        zoom: 2
    });

    map.addLayer(layer);

    data.forEach(function(row) {

      d3.json("http://sensor-api.localdata.com/api/v1/sources/"+row.source+"/entries?count=1&sort=desc", function(r) {

        if (r.data[0]) {
          L.circle([r.data[0].data.location[1], r.data[0].data.location[0]], 200).addTo(map);
        } else {
          console.log("failed", r, arguments);
        }

      });

    });
  }

  function init() {
    initMap();
  }

  //
  // Go!
  //
  init();

}

//
// Make the whole thing go
//
(new IndexController());
}(window.STPX));