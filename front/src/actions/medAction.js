export const FETCH_MEDS_SUCCESS = "FETCH_MEDS_SUCCESS"
const fetchMedsSuccess = (meds) => ({type: FETCH_MEDS_SUCCESS,payload: meds})

export const FETCH_MEDS_LOADING = "FETCH_MEDS_LOADING"
const fetchMedsLoading = (meds) => ({type: FETCH_MEDS_LOADING})

export const FETCH_MEDS_ERROR = "FETCH_MEDS_ERROR"
const fetchMedsError = () => ({ type: FETCH_MEDS_ERROR })

export const fetchMeds = (meds) => dispatch => {
  dispatch(
    fetchMedsLoading()
  )

  fetch('https://datadiscovery.nlm.nih.gov/resource/crzr-uvwg.json', {
      'Content-Type': 'application/json',
  })
  .then(res => res.json())
  .then(meds => {
    dispatch(
      fetchMedsSuccess(meds)
    )
  })
  .catch(err => {
    dispatch(
      fetchMedsError()
    )
  })
}