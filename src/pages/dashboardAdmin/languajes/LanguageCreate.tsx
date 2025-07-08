

import { useNavigate } from 'react-router-dom'
import { useCreateLanguageMutation } from '../../../services/languageApi'
import type {  LanguageFormData } from '../../../types/types'
import LanguageForm from '../../../components/dashboardAdmin/LanguageForm'

export default function LanguageCreate() {

  const navigate = useNavigate()
  const [createLanguage] = useCreateLanguageMutation()

  const handleSubmit = async (formData : LanguageFormData)=>{
    console.log(formData)
    await createLanguage(formData).unwrap()

    navigate("/admin/languages")
  }

  return (
    <div>
      <h2>Crear Lenguaje</h2>
      <LanguageForm onSubmit={handleSubmit}/>
    </div>
  )
}
