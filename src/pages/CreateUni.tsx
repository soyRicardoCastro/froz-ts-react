import { useState, FormEvent } from 'react'
import { Layout } from '../components'
import { Career, Coach, CreateUniForm } from '../types'
import axios from '../services/axios'

const CreateUni = () => {
  const [uni, setUni] = useState<CreateUniForm>({
    name: '',
    state: '',
    academicRank: '',
    division: '',
    careers: [],
    coachs: [],
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [academicRank, setAcademicRank] = useState<string>('')
  const [division, setDivision] = useState<string>('')
  const [career, setCareer] = useState<string>('')
  const [careers, setCareers] = useState<Career[]>([])
  const [coachs, setCoachs] = useState<Coach[]>([])

  const [coachName, setCoachName] = useState<string>('')
  const [coachEmail, setCoachEmail] = useState<string>('')
  const [coachPhone, setCoachPhone] = useState<string>('')
  const [coachGender, setCoachGender] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submiting')
    console.log(uni)

    setLoading(true)
    const data = await axios.post('/api/unis', uni)
    setLoading(false)
    console.log('ikike submited')
    console.log(data)

    setUni({
      name: '',
      state: '',
      academicRank: '',
      division: '',
      careers: [],
      coachs: [],
    })
    console.log(uni)
  }

  const submitForm = () => {
    setUni({
      name,
      state,
      academicRank,
      division,
      careers,
      coachs,
    })
    console.log(uni)
    setName('')
    setState('')
    setAcademicRank('')
    setDivision('')

    console.log('click')
  }

  const handleClickCareer = () => {
    const ca = { name: career }
    careers.push(ca)
    setCareer('')
  }

  const handleClickCoach = () => {
    const coach = {
      name: coachName,
      phone: coachPhone,
      email: coachEmail,
      gender: coachGender,
    }

    coachs.push(coach)
    setCoachName('')
    setCoachEmail('')
    setCoachPhone('')
    setCoachGender('')
  }

  return (
    <Layout title="Create University" category="Admin">
      <div className="flex justify-center align-center">
        <form
          onSubmit={handleSubmit}
          className="mw-md mx-auto h-full flex flex-col gap-5"
        >
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="State"
            value={state}
            onChange={(e) => {
              setState(e.target.value)
            }}
          />
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="Academic Rank"
            value={academicRank}
            onChange={(e) => {
              setAcademicRank(e.target.value)
            }}
          />

          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="Division"
            value={division}
            onChange={(e) => {
              setDivision(e.target.value)
            }}
          />

          <h3 className="text-xl text-white">Careers</h3>
          <p className="text-xs textgray200">
            * Write the career and push "Add Career" for save
          </p>

          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="Career Name"
            value={career}
            onChange={(e) => {
              setCareer(e.target.value)
            }}
          />
          <div
            onClick={handleClickCareer}
            className="px-5 py-2 rounded-md bg-slate-600 w-32 hover:cursor-pointer hover:bg-slate-400 transition"
          >
            Add career
          </div>

          <h3 className="text-xl text-white">Coachs</h3>
          <p className="text-xs textgray200">
            * Write the coach info and push "Add Coach" for save
          </p>
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="coach name"
            value={coachName}
            onChange={(e) => setCoachName(e.target.value)}
          />
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="coach email"
            value={coachEmail}
            onChange={(e) => setCoachEmail(e.target.value)}
          />
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="coach phone"
            value={coachPhone}
            onChange={(e) => setCoachPhone(e.target.value)}
          />
          <input
            className="w-full border-none bg-slate-900 text-white py-2 px-5 rounded-xl outline-none focus:outline-none "
            placeholder="coach gender"
            value={coachGender}
            onChange={(e) => setCoachGender(e.target.value)}
          />
          <div
            onClick={handleClickCoach}
            className="px-5 py-2 rounded-md bg-slate-600 w-32 hover:cursor-pointer hover:bg-slate-400 transition"
          >
            Add coach
          </div>

          {loading ? (
            <button
              className="px-7 py-3 bg-lime-500 transition mt-6 hover:cursor-disabled rounded-xl"
              onClick={submitForm}
              type="submit"
              disabled
            >
              'Sending...'
            </button>
          ) : (
            <button
              className="px-7 py-3 bg-lime-500 transition mt-6 hover:bg-lime-600 rounded-xl"
              onClick={submitForm}
              type="submit"
            >
              Create Uni
            </button>
          )}
        </form>
      </div>
    </Layout>
  )
}

export default CreateUni
