import { useNavigate } from "react-router-dom"
import ModuleForm from "../../../components/dashboardAdmin/ModuleForm"
import { useCreateModuleMutation } from "../../../services/moduleApi"
import type { TypeModuleForm } from "../../../types/types"

function ModulesCreate() {
  const navigate = useNavigate()

  const [createModule] = useCreateModuleMutation()

  const handleSubmit = async (formData: TypeModuleForm) => {


    const result = createModule(formData).unwrap()
    console.log(result)
    navigate("/admin/modules")
  }

  return (
    <div>
      <h2>Crear Lenguaje</h2>
      {/* <LanguageForm onSubmit={handleSubmit}/> */}
      <ModuleForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default ModulesCreate