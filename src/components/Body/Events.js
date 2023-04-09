import './Events.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '../Body/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const IITdelhi = {title:"IIT Delhi  Hackathon" ,date:"Upcoming", image:"https://international.iitd.ac.in/wp-content/uploads/2022/02/image_70399894-a2dc-4358-8667-700ccec5698f20220208_150024.jpg" ,description:"Frienducation will soon visit IIT delhi.",style:{opacity:'0.5'},
itemData:[
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
  {
    img: '',
    title: '',
  },
]};

const DTU = {title:"DTU BFF Hackathon" ,date:"1st to 2nd April", image:"https://drive.google.com/uc?export=view&id=1pyKC8HmHH66DDa85n0D5KX_arYNC5Gb-" ,description:"Frienducation hosted a 24 hour long running hackathon, which was called for hackers, artists, coders, designers, tech evangelists, creatives, and developers to take a part to win awesome prizes and collaborate with other developers.",
itemData:[
  {
    img: 'https://lh3.googleusercontent.com/QM__Y9w7P8qPnQhAgtbmNMD9YS5U6OCjUAGZ2-eh3W8JctO_P0MNHb1U5M3MJ_Ml28L0fskoVrLjLdQ9XieZu5b30d8xrBpC0IsHXxzbskznrHs4L70-P1AXCD1poQeveG36aMj-wjXrTb_u8SYxUZuSHRvOUM2i6NFiuKTdeQGOGdXo6zombVij4zt094idnYSan5gRkvQALw-TcYVtwK3gU7RdP4hU5x8xYdkOOjE2Hko2mTQH_KspnffffdwCrKTpTelCbkyUa0bsqVhaxGjkWiUZlLTqbYizxkk0YC8uAW7mQ4mADh3VPJqhygtGHPV4QPnruuUA-Se2-LVud2oAr872gIu1XXUxDBMEuAWGRJX4Lig1Dzdxsiy9ag1cGLHOa0xXvSSN7ZObZleePBGdX4D88E7pJe9bztBQv8Ip_HAibCcKn4z5rF43R8kNiAyYf0sUTZXodFCVX3k_3e2b4S7mU_m1Um1jbITTGt5XIjBKYShPtRFhIeeBvhOfdjsNYQZKlb9GYWO_Fow6cV-ba6e56S8nxrKrSNWihYxZMiys7MnM9mN4qpZUVWquHsB9xrOcNSS23xwlfDr9nnDdMwuC9xyBsO0yxwl2Cx80bdZCMLBis_3x_6801iM6hUr5-W7pJUdX0QQdt5KY5k6R5LTQ9my9oMMv8agx6TdB-FCj2KfNQ7lG7SSGYXi_iBqbWX9_LklH-hMHQmEhkRpqog3MBqVeKV5wxleLgb0WJwkhPi2GrBoW6leqdaUedaGnPZh6NRLiRMlP8HJURXFNKa38zStXEbkQ1reTy1q76iA5Znbp0jcpC2xg1kFex_kx-qcgI_k7Aud6NnMGdEWrJzLU7w5eMIONaBwafSCSU0Roq9MAcY9wLH8jfMNa1jbMAAp-XO0Xy_7ncTjoDdts-pNt6qxXYKhj2to7ELp62FUp=w658-h877-s-no?authuser=0',
    title: ''
  },
  {
    img: 'https://lh3.googleusercontent.com/P4s2v6Mn1Ncev3oxaMcKyNePKbfXfnO414eehI8A4qazQ64nbJrrZDnWQdP5lOAmXRjOOvDJ_YwLuFNVJf7cHRuC02ivZGBYIGLxUu2PteFSLOnVVa4Clq7iiPXYHIP9AwT2ocXckfVrzjJICeYu7PXSfqrhBnQAMN6gTNeWAGBjq-2HSzEQiKK0E7wpf7ChU3S-p-LDTq3PtFI98i2J5jCehlJK48YMXF8Pu4cQ7x12aMgpNobGGTQQWeJ6Effd8tQRhQ4mt_gRKIkcjQoY25ffUfRUj6jajfwdn8lShDUl1S1FmS5rEskLHcPdInRxkrkl3UIBn67dMvBlIB2AAFnHxDdYiTzUP03QR-pu3tFiLmCDoubce-3dfuE7spUhi75o0F5BQnxtkreD5OECTkt79h1XjXOY8IEDpB4q_-mG2p4XMyiMEiS0xq8HF6VGFnH6yApkJWqlY_yat9_xkZMvBjmztG9Bjmu-Ivu6JewPU4GrIA_daBmhZrgp-3-uGDxkTSTv1qHiuwU91aQPZqIGe7_V9zyM4rIS9DdfNMAwFTgdHwdzQg_tD2ej-RYHCmMiLe3QN33EEKbV1eY8jCHEtu6s_R3PQqAiVCSxCLknLbX8vP1ovYoTB0A974CHsJfyRybFACkr771aw2GSIQ5Boaqk0NaAYbXVDwb_U_mniPXeyfhtL5mTh5w4tHGmeYav6Cvf_DDYLAjW_oNN7lHaSN7IfS_FfxtPTIfoy8-GKBwCGmN61pPuTTHz-GGq30kCW7NiOGF-cjiMX6BTeGSBcUqgvwZJ8EgnAOmmiZtciqgPFmnqbhKyaJc5Tuh2fHlOmlWuf6whnMTXZUYCdK2sFvSW3K54Xt4k4A8pHwNwRFZ-TFCw3FqXKkcXAEpPG6qqEPs7rWTcpAv8aMaBFH3mdAs7EyDgMJiisKFQffgGntn2=w658-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/TFtVGHwLHHqd51nfsSJHN6x_7b6poNsdM16AWGl6dYr7CMWF3a7_xh2c-7B0ffAWX_iMyxgaLy-EQR_eLHhWyfIH9UJ2Hw2Kec3WBjJTKfLpRpYbKf-xBSCTXagqf5I9IUmorE0r6iju-gSOHIPATPF4KZ8hr7LEs2zZ0tmXpls0pICMKQSVfhBEyHh4tfdw40R0inEo8eZdHX6Mi6P_EhYKHEwnAx_4cexVBBmZ8gfnlTF8qVfBcq8PP_yezk5AwXIU99ecn1ZGMmMRf50C0F4QUgG4WTH48M5eCL_PQZTfSwOLXXzSRgv42mPCwYePWxMU8DugcwLzuxUw95FPCYDEd-4Q0YpmUVYoqazo1RqEruux5Ov4a96KjEqc-9x33QfJRa2Dq0jtzEqSqqvja74qGkxpm5pmHL8Wx_H0PxRwjVAuBlSY8Ge8SH-6W38e55OqvJcsSaj0SpY08itmHYdE-VmDy6BTvXSmvUkYDVabnR19q324cjI_OmY2YH_FJ0CVtkLiFdD1AlvEGmqfJb3o2cEzRNTqAS9QussnJQ14qrxyqzoA2AA3YnofgqF5HF4sjqbWyIKCHlnFcjD9xDl7VtIbnxKlsEAV0fFC0AAcchuGp6pkJqVqZ_5Jo6V5hQC_U0_0Et4G_K4WuDL9eu6tN3a5G10bB3EjGJpi4nNK45Q5Y1WB59-W9t1t0mHqILul1jfyi6ck04hAJ7_jr9ywVmJlwAG1j7iT0H9glzkmAfYFI4ScgNMYAWs1oHL43Ya9JIJmc1lfZSHjOMVGKmwXz0AxpbGnKb9sA3_q9R-rqCXbk_cAh0FzQmx2TQrgbYVcVdpbjg45j5PwJsMDK4d0EM0x0CvbOmMlFsEh06kEQMWu6xVcZatQp_lHJG541j2UTVxFpKEohJzuNqyh8uGTDqBGpSXPDJV9u1vf7aOCwMC5=w658-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/XP4RpKSLxP3_WV6zo_PahNgSpk44SbdyvrH4ojl0sklweyD-9V5P3D697Bfo2iX2uG0HWfvn3knURFeUcoV5kfjMqXocTy7GuHHTac9k49ToOrsm6t3Mnu-yES9Gp0XSNxUXqhNvth628LYANnmtRQKJF_-DST-lh6D2fhx-WA0KLzaCbPSM1L7Gey5rCWBPfBpwiUVx-5_71M6D8AVRZqFI7OcN5zmv6kZKvgui_tRgY1qXb2TT3jq4loZFBMht78jCYIwpItcfeNk3BFkxbR2D3Rwi8-lO9PXr4lLc0GcEkNyxAUVHSVwK0KOmHSgQwORzj61Y_SKS5vVmu68EbKiDug5xuLBcEk4X-PKCxoQZZEEuGKB5MFLfSbl3KT-CdhGOymY44dmbj0w70VGHn8RqEU48te7IqrKfO1ro1163IIflbTS25Dkm_Nqu7fm5R6m5inNjl5n9b8WQOGH010v1GPYqXt6yFjm5FajKAamzos4wS1s7kDtnC6vAiHO7165bzA_4lStNLWrubwNkHwJiDG21b8A95b2TvC-RXK-MX0BHYhZg65bV5nRGXorotG11-okrd7KT9a7wWgYSvbrf0jonp7uZasP6mn-aIel6KXaB2RBAAsYEA8lbom0CziBf7gH71nVs-Oyv0LiVYSporiPvbJZ8-12Da_-pIO3wAiWGXtdB-7jsItP1ovmNNfx-dImXEoTFzmtHY9w7fw7bZjPYfIvORUYMTKpqZ1hMMhlqR6wZoJp3r2kOEgiyWeY74jI8K2qBdiRXyKP8DWAH4_Fs18d5945kbmtznSf9z8retyEjielBBsHGSKW6BAj4TgsRUleL3eDcZ2yomGBeDBITVAx_ojHauEsEZOmgu_ByrsI2hOe60bMDp_xNAPP0gtJa4nMDgcmbTrrEyG0NoLnkznpaHRPHQDAZFJGKFevm=w658-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/GIOQO1w-gg84E01nd5bFqd7kw4XWeORHsnUPeF0epdbpqqEg1L9bLEptnH9WX-NsvDMAk0MrNtEjlWAzUhx-3sP7-qOSdFLh0kRWwWA9sTw6mEQ-2GyQPP1PgRKIlsI_FOfTAkhKZ_CMTTLeHC-J09ONhw6x9HviSxclmxDo5G6l60kapgR06DMzZxG0lUV9x6n6KM75pB21pwXZduMWk0i-Qwvae-lL2x1iYiBCWl2Bninvqxm1K_LG9LXbfzN_RQqQ_uP39I6wNTbqC8Azol2IdxaCIuFUA-WkS05wcKuAwXGUmThLBLYoGnKZnmni-EQlUMRrAh1DaV8usYCUpA93EWQtezMRhXdrgTEukmvm6Yuh_O7cLkALs5RxnS1n98h_DiChZQqO4Yc05NJQC7ntH_s72-X9km1OOssQY03JdLAJtm_oJmCsKwdqoRATd2k3IwDU8UORxpelsv9B6cqvA2rI7bK0mi_G7_9av3GnL_vRpPu8ebj-hX3O_HIt9rLQXQNupW3il_6gTe-waym0dEdotm-jASvHi7ZhwVKuQOTdAaap6fN_ycdSOzj9QXeBp87Mvi_P3gr8LR9j_h90DjkUnaKz3oQM3iwJw4r4UiuVc4p0eRHG0CLEOJCl7RZzwK2hOVO-MCMvQ_D7cNJwX7RkvNJbfZYOY5QdV9gGEZ47ARw7spUkEANMIhpKrP62psOuE3EBAf8DYTtYwNEyqqjc_Zy36FMi6Kg4J3U6h49_68XgudKt3lIPK056gaJTKJYgblb-5cStnj-llnmleXXowvjzr4Jj88TMsJnPbVHZ3nLfr7-46s1XCOGnjnsY_fkpfKJ5ADFWrQi2oe1b2PUIYPtGQPm-i2_vSmVTaTrT2iRV2cDw9MN4NjeYbKieYBe-puZYQBlWH3PaNelb4HS6oX6oqJ9zK0jqQv3JdnYU=w1170-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/JrWDWaZr97kkbm1BdZ_cmufelncbZ-IFr80fAwWzC2L3oX7AyTcIh3FNASZ45XnRYa4texBGhNRN1QoBImRjR3CgvyZJjOQNq0gF13rdXYeR8q0vHKKoEMj7T8i-EAq1dMDyCVLgIiaGVN0O2848SCOP5UqCJ0UAd7KNnYNp9-jLmhK-EuQGz3as0KJEp5YtGIyWOFWG5zacCXJBsL6-dXOWUkQGoIOT01IgXyCSPD6S1nwVVCbY2RasC_vPCVXQvbtnHD8vYPYNh1znastA_JtYPMBBjZWbasruuMM16ZkGJ5EP-j6-tbdae2QMAhdTrE1vRXWlPS-ffO6gpFZxxNtzReuHvPskP-HWVFlgdR2rHcS4yYNBXvl5NtS0WEmKF35SuaoWzoloprNJoGiNbPxH_57dYAniurSfmKrAEgvYE6OEoJERTQysk7xJ_etHsMt7HZ3YVQN6NfmTOJaYBIhAcPbFhkd7UVJ-2e96P3REx2CJPQ1tbLUu28lJ0Yc-LreSvfVqsVKWNhZdUY3aQh9HSqk43UjbrFTtEPjS2lVcTe4_4rDhdj-VXQOs9ZPVbbxk0oSJ1oC1bW6vbgIGwKK-Xw2lsjnDqN6S9Ai47F2KeN9f6ZLrwIwoVI601_vw68BeduuWWiGrZU6JehB5ZO04KWgyeCNmo-ofKjMjg5UF5KNSYUcP-Tfy9HmWPMlUqnxvk0nX6goCCvV9ubvGpRL19k69IZsNyfcWJNLUe5WylDqF_ARAmfCzKgogMWwOv6BRmOrNzl7-yRN3WqTMeJoudLnnTfOmM0K57xmzL5Ba8BylSTfxyrG_TtbebeD7IBM3J_N11MVnMemU7X-aQAGT084qU16TaWJPd0nhFgUL9wD0CcLivGHerHx96fzBwOOVXEoVjXXe_q2xX2oJOQtXu5-P1dghWz1FRvCb14t7HDrd=w1170-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/jEtpGKm3ctpYd_tEbzMD7wf2t599FFGO53JikHb55U9wYtJdiacsoUkJqb1HVbAOevLWDRNx84c8kzxdge4iU_1UbOQ3xGon01TraOGuzv5ypCd9Ogi0XqewcMJhJVrehIiUczdKR2Kqpvpu4o8oRZ5cpMcwgUdidcq8B7ZRNibAsrGUOPUkW4ICB0NFk9_p_VO1wL1T1_b_NepUl-ipmVIthuDDJPI1W6Zzixj4emGbhVnlniGQxCXYsA9n4JydkkBzV8A04TX_3DglqkG-QNcw1zkY8uW9MiXPJlWU3gDvzOc3HTYBfzfWAx0cjHzmcGifmV_zh1yHCpgBwOyPR4afFkis-t5iesPnbPqILjgS8CfurexgxamTcdAmK19Pv-smC7VSNQ_kmgImoKIK_LaT5CGuCL63kKymkLiJLFep7NAmnzDPlFb7LObATtHjgeWVedBuzgHv3k5ptHcZ8IYKxg5UpcDg3_QH3qmTbL_7ZSLwaOmNPqAR56UZsqR-AgTkRozzmc5lar7ZHXFG2ojopn3d9ncLvlzhMvsh6heOgsn1abF0gifVOXJVa2XGG9KUmlK1cVBM2cWjsl1RnQyKo5IUe4CvyUdUKA77ZZLRopXV3CjblM7sW-IJI_kWcn4h8R6UYKwl5RSeW5dJFGj9jvHafHG--lt3xIRNZH5mSa3mLN7-tI_gCrxjeJXuXcKRQTJFln1YrdpVuhxKRZx6eJIf0A_aM0PmNVWH_8kbzyKgQJP9qyEpJc9JeLctZFgvneWYd3UjTj8VELAihRl_v81KY7BB4JOum2Ws_TURKyYET6SLBv1IZhtNdhe7_JRausfYVTG_5N_8feVnzEgBzMpgUBBLKQwNBn46vLiaG28b6JipeqmgHYBh4d2sZAlhhV7cAWKf7c8-yZI8owDgUSY9lwIaTlAv5Ooi_9GoN2b5=w1170-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/9bV-ZOrdQ-OELpl5uygBcLA2Dc2PuoHHOvDnxskDB0QDAcpqEOC3Ppgj0s6Sjrx-HHhW8xy3xHbJLaPKEzpAecED3Bgse7tDZ5i3yHCRtft0rFHZ27VzwaeV3K6DYTj-cSSXdVJpe5MZngtXEYmcCE3sggUFi5vJmsTSoA-anpaG-MjsZNLxkMEGfGCUmpj_OPz3Maqchc4khiEIfLB7R1R0fMofGrTptYm7eyU04108MotZsvjjAiSbvLBpcJbxUOZwVJTb9daJirHg9d2HnpNba1sQoRjXnBF2qpgK_CPDxXLJD35I1uCL6VezFB3cydCUe0yrOaQy3Mun7TE2Ih7YO6RginKB9MzeK7fEj1fh2V9lhfU5_uDqxiYuPqJcYn1CaA9pPMAOdxBwkpMGafAGs2nkctN7vLUyr0UUQyOfv2FQirz-3lk39-avscD8BUFulC_j1qrqcKDO0Dt4BLEiKIh39k4dhAQVtj_-DX6fufpz1VS0kE5FR91oXAIzGp76WIhXeew_IBNvuAZP9Q9T5r_OHj7zSrKCLTpkNh2PDLBLUpr3K3x_QMKP-27870iFeoYidKqgKQcEGyvYPmfW3rvPW1IUA2Sr3FlL6zW0bGu7y977TZrLHOEFCHS1Ljx1VnfXUXSASWRGnH40aMc1CNJjn__Q4eHEHZosTTTG4BRA7N4HJR3w0J0T7vrk5PnMB0dyWBx3GUR8peZZrCZOgzlgicprbewMVsJ2mNXiFjNEnOLfFQqeYqEqNdixvaDdAMh2kSKopbXDoTCdMyGD8qSzphd1cZXDQvESSrI3Ay64doGCS861rWlPEz7LgOVSYTPkmBgES4Z_jmsJQaER056z5kIczgGjJEa2xIoqDzcbNNq2mDdjZ-bXUY9ojPgTzFizRIKxFoRSwKwz43DLKHn6VXaf0HmEGumVLm7rnoB_=w658-h877-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/9bV-ZOrdQ-OELpl5uygBcLA2Dc2PuoHHOvDnxskDB0QDAcpqEOC3Ppgj0s6Sjrx-HHhW8xy3xHbJLaPKEzpAecED3Bgse7tDZ5i3yHCRtft0rFHZ27VzwaeV3K6DYTj-cSSXdVJpe5MZngtXEYmcCE3sggUFi5vJmsTSoA-anpaG-MjsZNLxkMEGfGCUmpj_OPz3Maqchc4khiEIfLB7R1R0fMofGrTptYm7eyU04108MotZsvjjAiSbvLBpcJbxUOZwVJTb9daJirHg9d2HnpNba1sQoRjXnBF2qpgK_CPDxXLJD35I1uCL6VezFB3cydCUe0yrOaQy3Mun7TE2Ih7YO6RginKB9MzeK7fEj1fh2V9lhfU5_uDqxiYuPqJcYn1CaA9pPMAOdxBwkpMGafAGs2nkctN7vLUyr0UUQyOfv2FQirz-3lk39-avscD8BUFulC_j1qrqcKDO0Dt4BLEiKIh39k4dhAQVtj_-DX6fufpz1VS0kE5FR91oXAIzGp76WIhXeew_IBNvuAZP9Q9T5r_OHj7zSrKCLTpkNh2PDLBLUpr3K3x_QMKP-27870iFeoYidKqgKQcEGyvYPmfW3rvPW1IUA2Sr3FlL6zW0bGu7y977TZrLHOEFCHS1Ljx1VnfXUXSASWRGnH40aMc1CNJjn__Q4eHEHZosTTTG4BRA7N4HJR3w0J0T7vrk5PnMB0dyWBx3GUR8peZZrCZOgzlgicprbewMVsJ2mNXiFjNEnOLfFQqeYqEqNdixvaDdAMh2kSKopbXDoTCdMyGD8qSzphd1cZXDQvESSrI3Ay64doGCS861rWlPEz7LgOVSYTPkmBgES4Z_jmsJQaER056z5kIczgGjJEa2xIoqDzcbNNq2mDdjZ-bXUY9ojPgTzFizRIKxFoRSwKwz43DLKHn6VXaf0HmEGumVLm7rnoB_=w658-h877-s-no?authuser=0',
    title: '',
  },
]};

const IIITdelhi = {title:"IIIT Delhi  Winterlude" ,date:"5 Feb", image:"https://lh3.googleusercontent.com/pw/AMWts8DFIxQ2tAEykpVPXSDX_Gno2_1uRjnrxrhS_iRyR5zrQ3dMdfZgWYq-N7Ke-0n1N6tnBYleB7AN2nYsf3U7PnIZ-TgPMPfA2acurZSR7VcvCY8Rn6ler9Ry64fDVVvW4iIzUkh4Zb-ovj-FGZ8wPcss=w1500-h844-s-no?authuser=0" ,description:"Frienducation held an event at Winterlude. Our founder Priyansh Goel helped like-minded people connect, interact and learn by introducing them to frienducation and what frienducation aspires to achieve.",
itemData:[
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8D7gWd3-JEybeZVvikWTZKEID4w5wiSv3-JqH_tNSqqL-lsd7_o8ZFpYmSihBAa_4dUDO8lshFABdpO8Zsm2q_QoDb_vmSbf1rz3Nh3CeFOPz0UfBFwMTDf-185ii5040n0q6_PvtcXDXjBR6JVjn-F=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8Bj75SM1nJoCLJObfxGezPXBCoFpx_VaqxK20L9oJ6CI7sxcyVnymcGSuO91SVcV9eBe3tl6ZsLkmP21ef66kKIPqGOj_fmkehHLi9N7XtzjUJHkS1_ZK8EdH80GMtAUIzXmMeNbDeNkw6Apcry8ZtS=w1634-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8A19vAPSVRU2cTXoY9Mt0SiRFhl0TrO3LiAWiK0OyuF8xf8BKXZpCyLChlkHOLxxieA4dX6nqFiKME2yG0wKQRIe1gs1tuA0t77QhrxrsZ7ABfhRNRYxvjlK_exjp1K1OR7tG-xUmnwFUBs8cBHDAtx=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8DL1b0MibtLzSD8pGNUgyFOw3pEy5v255OcNe4BBaqRUB_EN-3YFqozmfRKe90zdWQH3Vw_ZHY0bcqq-L7Udi7JW4rmrvzTlI_oVXJYyYSNJbASlRO4DRgYETRiltoZSiER262SEixviMuZcepG89ab=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8BNaD6UB-vUG5PgKu-XzL_LVk7Zd1o96F64wFRrS3GXtC0R7JMwd1J9jXIGieG4bcAxeYM56xaGrZLwbDxqT9DcBFGZfjVELR1gao3dkPdQAfQ37vUURyYguzWmcbQcjDPletPXXTqdSdczB5L30_IW=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8DveAoKCXENg4yIb3feUZiCkmyaCVTxbNqIgrcF_q8FcyedGbTRtWeHcWw7bmFnQ3TQywKqohEB8LnLE5PUuLm9JglEmdJ7Oj2MSmYGSHSrkUM6WT2pFfd6NpV6Cbw2lD_KP0YVF9AtFZGH0Jv2er9F=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8BtLAMBWonHQIRXIdypAuLpJyt9OSsCfKO97A655UxVlZCjoz6vuYgYrcNAgiEybzXJnFmZqbWpYOQi6uS93bqU9zX7AO-fWUbeSQePuYmnXFYHmmMHiRWWnMSnMFDMvYui3VOn8rNBqGG7DdQf8d2c=w517-h919-s-no?authuser=0',
    title: '',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AMWts8BkFZjD6GtjvOFzv1bn5AcghH3sJcxw74kb-x6TMr0Ny4eCwA5BvI33jS8Q5OabRzTu59wQyGUQnJZuteOFTjjqZo5ImHnTG0_-9Y8BknBFdAUKeEnmz-6Vzl_I3IRQAZF6MIaolTVLYEt1j6OjsDAH=w1634-h919-s-no?authuser=0',
    title: '',
  },
]};



function Events() {

  
  return (
    <div>
      <Container style={{marginBottom:'2rem'}}>
      <div className="Head" style={{marginTop:'2rem', marginBottom:'1rem'}}>
      <Button variant="contained" style={{backgroundColor:'rgb(75, 89, 247)'}}>All Events</Button>
      <Button variant="contained" style={{backgroundColor:'rgb(75, 89, 247)'}}>Upcoming Events</Button>
      <Button variant="contained" style={{backgroundColor:'rgb(75, 89, 247)'}}>Past Events</Button>
      </div>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent:'space-even'}}> 
        <Grid item xs={12} sm={6} md={4}>
        <Card {...IITdelhi}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card {...DTU}/></Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card {...IIITdelhi}></Card></Grid>
      </Grid>
    </Box>
    </Container>
    
    </div>
  )
}

export default Events
