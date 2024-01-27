import recordData from '../data/record.json'
import { WordRecord } from '../types'

const records: Array<WordRecord> = recordData as Array<WordRecord>

export const getEntries = () => recordData

export const addRecord = () => null