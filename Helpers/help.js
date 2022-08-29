let lastId = 0
export const convertDateText = (text) => {
  const newText = text.slice(0, 11)
  return newText
}

export const convertMountName = (text) => {
  const newText = text.slice(0, 6)
  return newText
}
export const uniqueId = (prefix = 'id') => {
  lastId++
  return `${prefix}${lastId}`
}

export const attendees = [
  { logo: '/Opel.png', width: 130, height: 106 },
  { logo: '/Volvo.png', width: 102, height: 104 },
  { logo: '/Hewlett.png', width: 212, height: 88 },
  { logo: '/Rolls.png', width: 76, height: 124 },
  { logo: '/British.png', width: 173, height: 93 },
  { logo: '/groundfos.png', width: 199, height: 73 },

  { logo: '/Fraunhofer.png', width: 192, height: 57 },
  { logo: '/Doosan.png', width: 162, height: 75 },
  { logo: '/Danfoss.png', width: 173, height: 71 },
  { logo: '/CGI.png', width: 134, height: 63 },
  { logo: '/Cargill.png', width: 140, height: 61 },
  { logo: '/Ipsen.png', width: 203, height: 59 },

  { logo: '/AirLiquide.png', width: 180, height: 34 },
  { logo: '/AtlasCopco.png', width: 141, height: 69 },
  { logo: '/Bmt.png', width: 106, height: 67 },
  { logo: '/Biller.png', width: 252, height: 64 },
  { logo: '/GE.png', width: 99, height: 100 },
  { logo: '/Cecimo.png', width: 219, height: 55 },

  { logo: '/Aitbus.png', width: 147, height: 117 },
  { logo: '/Ford.png', width: 172, height: 67 },
  { logo: '/Magneti.png', width: 140, height: 71 },
  { logo: '/Nokia.png', width: 181, height: 31 },
  { logo: '/Merck.png', width: 196, height: 60 },
  { logo: '/John.png', width: 126, height: 86 },

  { logo: '/P&G.png', width: 131, height: 131 },
  { logo: '/Samsung.png', width: 221, height: 61 },
  { logo: '/Sanofi.png', width: 130, height: 103 },
  { logo: '/Unilever.png', width: 94, height: 105 },
  { logo: '/GKN.png', width: 175, height: 58 },
  { logo: '/Fischer.png', width: 199, height: 77 },
]
export const formatToReqData = (form) => {
  const DELEGATE_MAP = {
    full_name: 'full_name',
    job_title: 'job_title',
    email: 'email',
  }
  const sections = {}
  const delegates = Object.keys(form).forEach((item) => {
    const key = item.split('-')
    if (key?.[1] && key[0] === DELEGATE_MAP?.[key[0]]) {
      sections[key[1]] = {
        ...(sections[key[1]] || {}),
        [key[0]]: form[item],
      }
    }
  })
  return Object.values(sections)
}
