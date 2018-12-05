import React from 'react'

import Koala from './projects/Koala'
import Loco from './projects/Loco'
import Hikikomori from './projects/Hikikomori'
import FreshCoast from './projects/FreshCoast'
import DigiExam from './projects/DigiExam'
import Badrumsboden from './projects/Badrumsboden'
import Phocus from './projects/Phocus'
import Tremory from './projects/Tremory'
import Cinnober from './projects/Cinnober'

const getProjectContent = id => {
  const content = {
    Tremory,
    Cinnober,
    Hikikomori,
    Phocus,
    DigiExam,
    Koala,
    Loco,
    FreshCoast,
    Badrumsboden,
  }

  return content[id]
}

export default getProjectContent