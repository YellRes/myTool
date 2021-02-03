import axios from 'axios'

export const findAllSentenceApi = () => {
    return axios.post('/engSentence/findAllSentence', {
    })
}

export const addSentenceApi = (params) => {
    return axios.post('/engSentence/addSentence', {
      sentence: params.sentence,
      translation: params.translation
    })
}
