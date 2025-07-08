
import { useNavigate, useParams } from 'react-router-dom'
import ModuleForm from '../../../components/dashboardAdmin/ModuleForm'
import { useGetModuleByIdQuery, useUpdateModuleMutation } from '../../../services/moduleApi'
import type { TypeModuleForm } from '../../../types/types'


function ModulesEdit() {
  const navigate = useNavigate()

  const { id} = useParams()
  console.log("ID desde params:", id, "convertido:", Number(id));
  const { data: module, isLoading} = useGetModuleByIdQuery(Number(id))
  const [updateModule] = useUpdateModuleMutation()

  if (isLoading) return <div>Cargando...</div>
  const handleSubmit = async (formData: TypeModuleForm) => {
     updateModule({ id: Number(id), ...formData }).unwrap()
      navigate("/admin/modules")
   
  }

  return (
    <div>
      <h2>Crear Lenguaje</h2>
      {/* <LanguageForm onSubmit={handleSubmit}/> */}
      <ModuleForm onSubmit={handleSubmit} initialData={module} />
    </div>
  )
}

export default ModulesEdit