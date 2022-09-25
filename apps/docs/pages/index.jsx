import { AppBar, Box, Button, Card, CardContent, CardHeader, Divider, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import { lumpsumFormConfig, royaltyFormConfig } from '../config'

const calculatePercentage = (a, b) => {
  console.log('ab', a,b, (a / 100) * b)
  return (a / 100) * b;
}

export default function Docs() {
  const [lumpSumFormData, setLumpSumFormData] = useState({ lumpsumPercentageDev: 70, lumpsumPercentage: 30, gstPercentageDev: 70, gstPercentage: 30, gstRate: 12 })
  const [royaltyFormData, setRoyaltyFormData] = useState({ royaltyPercentageDev: 95, royaltyPercentage: 5 })
  const [showResult, setShowResult] = useState({ lumpsumResult: false, royaltyResult: false })
  const [formSubmitted, setFormSubmitted] = useState({ lumpsum: false, royalty: false })

  const onLumpsumFieldValueChange = (e) => {
    const value = e.target.value
    setLumpSumFormData((prevState) => ({ ...prevState, [e.target.name]: value }))
  }

  const onRoyaltyFieldValueChange = (e) => {
    const value = e.target.value
    setRoyaltyFormData((prevState) => ({ ...prevState, [e.target.name]: value }))
  }

  const calculateResult = (config, data, showResultKey) => {
    let show = true
    config.forEach((item) => {
      if (!!!data[item.sourceField]) {
        show = false
      } else {
        const value = calculatePercentage(data[item.percentageField], data[item.sourceField])
        item.result = currencyFomatting(value)
      }
    })
    setShowResult((prevState) => ({ ...prevState, [showResultKey]: show }))
  }

  const validateLumpSumForm = (field) => {
    return formSubmitted.lumpsum && !!!lumpSumFormData[field]
  }

  const validateRoyaltyForm = (field) => {
    return formSubmitted.royalty && !!!royaltyFormData[field]
  }

  const ErrorMessage = ({ id, validate }) => {
    return validate(id) ?
      <FormHelperText error id="accountId-error">
        Required Field
      </FormHelperText> : null
  }

  const currencyFomatting = (value) => {
    const __amount = value?.toString().replace(/,/g, '')
    return value ? new Intl.NumberFormat("en-IN").format(__amount): '';
  }

  return (
    <>
      <AppBar sx={{ mb: 2 }} position="static">
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{
            pl: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          NRDC Licencing
        </Typography>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card variant="outlined" sx={{ minHeight: '440px' }}>
            <CardHeader title={`Calculate R&D Share of Lumpsum Premium`} />
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted((prevState) => ({ ...prevState, lumpsum: true }))
                calculateResult(lumpsumFormConfig, lumpSumFormData, 'lumpsumResult')
              }}>
                <FormControl sx={{ m: 1, width: '780px' }}>
                  <InputLabel htmlFor="developer">{`R&D Institution`}</InputLabel>
                  <OutlinedInput
                    id="developer"
                    name="developer"
                    label={`R&D Institution`}
                    error={validateLumpSumForm("developer")}
                    onChange={onLumpsumFieldValueChange}
                  />
                  <ErrorMessage id="developer" validate={validateLumpSumForm} />
                </FormControl>
                <div>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="lumpsum">Lum Sum Amount</InputLabel>
                    <OutlinedInput
                      id="lumpsum"
                      name="lumpsum"
                      label='Lum Sum Amount'
                      startAdornment={<> &#x20B9;</>}
                      error={validateLumpSumForm("lumpsum")}
                      value={currencyFomatting(lumpSumFormData?.lumpsum)}
                      onChange={(e) => {
                        const val = e.target.value.toString().replace(/,/g, '')
                        setLumpSumFormData((prevState) => ({
                          ...prevState, lumpsum1: val, lumpsum: e.target.value,
                          gstAmount1: calculatePercentage(lumpSumFormData.gstRate, val),
                          gstAmount: currencyFomatting(calculatePercentage(lumpSumFormData.gstRate, val))
                        }))
                      }} />

                    <ErrorMessage id="lumpsum" validate={validateLumpSumForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="lumpsumPercentageDev">{`Lump Sum Percentage(R&D Institution)`}</InputLabel>
                    <OutlinedInput
                      id="lumpsumPercentageDev"
                      name="lumpsumPercentageDev"
                      label={`Lump Sum Percentage(R&D Institution)`}
                      defaultValue={'70'}
                      endAdornment={'%'}
                      type="number"
                      error={validateLumpSumForm("lumpsumPercentageDev")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="lumpsumPercentageDev" validate={validateLumpSumForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="lumpsumPercentage">Lum Sum Percentage(NRDC)</InputLabel>
                    <OutlinedInput
                      id="lumpsumPercentage"
                      label="Lum Sum Percentage(NRDC)"
                      defaultValue={'30'}
                      endAdornment={'%'}
                      type="number"
                      error={validateLumpSumForm("lumpsumPercentage")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="lumpsumPercentage" validate={validateLumpSumForm} />
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="gstAmount">GST Amount</InputLabel>
                    <OutlinedInput
                      id="gstAmount"
                      name="gstAmount"
                      label="GST Amount"
                      startAdornment={<> &#x20B9;</>}
                      value={lumpSumFormData.gstAmount}
                      error={validateLumpSumForm("gstAmount")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="gstAmount" validate={validateLumpSumForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="gstPercentage">{`GST Percentage(R&D Institution)`}</InputLabel>
                    <OutlinedInput
                      id="gstPercentageDev"
                      defaultValue={70}
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      label={`GST Percentage(R&D Institution)`}
                      error={validateLumpSumForm("gstPercentageDev")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="gstPercentageDev" validate={validateLumpSumForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="gstPercentage">GST Percentage(NRDC)</InputLabel>
                    <OutlinedInput
                      id="gstPercentage"
                      defaultValue={30}
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      label="GST Percentage(NRDC)"
                      type="number"
                      error={validateLumpSumForm("gstPercentage")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="gstPercentage" validate={validateLumpSumForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '250px' }}>
                    <InputLabel htmlFor="gstRate">Current GST Rate</InputLabel>
                    <OutlinedInput
                      id="gstRate"
                      defaultValue={12}
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      label="Current GST Rate"
                      type="number"
                      error={validateLumpSumForm("gstRate")}
                      onChange={onLumpsumFieldValueChange}
                    />
                    <ErrorMessage id="gstRate" validate={validateLumpSumForm} />
                  </FormControl>
                </div>
                <Button variant='contained' type="submit" style={{ marginLeft: '10px', marginTop: '10px' }}>
                  Calculate
                </Button>
              </form>
            </CardContent>
            {showResult.lumpsumResult ? <Box sx={{ marginLeft: '10px' }}>
              <Divider />
              <CardContent>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {lumpsumFormConfig.map((item, index) => (
                    <Grid item xs={2} sm={4} md={6} key={index}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.fieldTitle}
                      </Typography><Typography variant="h5" component="div">
                        &#x20B9;{item.result}
                      </Typography>
                    </Grid>
                  )
                  )}
                </Grid>
              </CardContent></Box> : null}
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined" sx={{ minHeight: '440px' }}>
            <CardHeader title={`Calculate R&D Share of Recurring Royalty`} />
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted((prevState) => ({ ...prevState, royalty: true }))
                calculateResult(royaltyFormConfig, royaltyFormData, 'royaltyResult')
              }}>
                <FormControl sx={{ m: 1, width: '280px' }}>
                  <InputLabel htmlFor="sale">Sale Amount</InputLabel>
                  <OutlinedInput
                    id="sale"
                    name="sale"
                    label="Sale Amount"
                    startAdornment={<> &#x20B9;</>}
                    error={validateRoyaltyForm("sale")}
                    value={currencyFomatting(royaltyFormData.sale)}
                    onChange={(e) => {
                      const val = e.target.value.toString().replace(/,/g, '')
                      setRoyaltyFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value, sale1: val }))
                    }}
                  />
                  <ErrorMessage id="sale" validate={validateRoyaltyForm} />
                </FormControl>
                <div>
                  <FormControl sx={{ m: 1, width: '280px' }}>
                    <InputLabel htmlFor="royaltyPercentageDev">{`Royalty Percentage(R&D Institution)`}</InputLabel>
                    <OutlinedInput
                      id="royaltyPercentageDev"
                      name="royaltyPercentageDev"
                      label={`Royalty Percentage(R&D Institution)`}
                      defaultValue={'95'}
                      endAdornment={'%'}
                      type="number"
                      error={validateRoyaltyForm("royaltyPercentageDev")}
                      onChange={onRoyaltyFieldValueChange}
                    />
                    <ErrorMessage id="royaltyPercentageDev" validate={validateRoyaltyForm} />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '280px' }}>
                    <InputLabel htmlFor="royaltyPercentage">Royalty Percentage(NRDC)</InputLabel>
                    <OutlinedInput
                      id="royaltyPercentage"
                      name="royaltyPercentage"
                      label="Royalty Percentage(NRDC)"
                      defaultValue={'5'}
                      endAdornment={'%'}
                      error={validateRoyaltyForm("royaltyPercentage")}
                      onChange={onRoyaltyFieldValueChange}
                    />
                    <ErrorMessage id="royaltyPercentage" validate={validateRoyaltyForm} />
                  </FormControl>
                </div>
                <Button variant='contained' type="submit" style={{ marginLeft: '10px', marginTop: '155px' }}>
                  Calculate
                </Button>
              </form>
            </CardContent>
            {showResult.royaltyResult ? <>
              <Divider />
              <CardContent>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {royaltyFormConfig.map((item, index) => (
                    <Grid item xs={2} sm={4} md={6} key={index}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.fieldTitle}
                      </Typography><Typography variant="h5" component="div">
                        &#x20B9;{item.result}
                      </Typography>
                    </Grid>
                  )
                  )}
                </Grid>
              </CardContent></> : null}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
