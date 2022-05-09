import '../Styles/PlanDetails.css'
import Workflow from "../PlanOptions/Workflow";
import WorkflowPlus from "../PlanOptions/WorkflowPlus";

function PlanDetails({ frequency }) {
  return (
    <div className="pp-card-section">
      <Workflow frequency={frequency} />
      <WorkflowPlus frequency={frequency} />
    </div>
  )
}

export default PlanDetails;