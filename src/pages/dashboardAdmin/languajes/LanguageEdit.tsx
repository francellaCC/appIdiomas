
import LanguageForm from '../../../components/dashboardAdmin/LanguageForm'
import type {  LanguageFormData } from '../../../types/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetLanguageByIdQuery, useUpdateLanguageMutation } from '../../../services/languageApi'

export default function LanguageEdit() {

  const { id } = useParams()
  const navigate = useNavigate()

  console.log("ID desde params:", id, "convertido:", Number(id));
  const { data: language, isLoading, isSuccess } = useGetLanguageByIdQuery(Number(id))
  const [updateLanguage] = useUpdateLanguageMutation()

  console.log(language)
  if (isLoading) return <div>Cargando...</div>
  const handleSubmit = async (formData: LanguageFormData) => {

    await updateLanguage({ id: Number(id), ...formData })

    if (isSuccess) {
      navigate("/admin/languages")
    }
  }
  return (
    <div>
      <h2>Editar Lenguage </h2>

      <LanguageForm onSubmit={handleSubmit} initialData={language} />
    </div>
  )
}
