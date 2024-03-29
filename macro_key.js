/*!
 * @license
 * Anh Phê - F2chart extension version 2.2.2.4
 */
//fetch("https://brains.tradingeconomics.com/v2/search/forex,bond,idx,commodity,mkt?q=ufb:com&pp=5&mkchart=1&p=0&_=1566570083316&stance=2").then(e=>e.json()).then(e=>{let t=e.hits.map(e=>({keyWord:e.name,name:e.pretty_name,className:e.s.toLowerCase()+"' + auth",type:"tradingeconomics"}));console.log(t)});

const auth = '&span=1y&securify=new&url=/commodity/crude-oil&AUTH=sesame&ohlc=0';
const wiKeyword = [{
        keyWord: "Tăng trưởng kinh tế",
        className: "wi-g_d_p",
        name: "gdp",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "GDP bình quân",
        className: "wi-g_d_p_binh_quan",
        name: "gdpbinhquan",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Thu nhập bình quân",
        className: "wi-g_d_p_binh_quan",
        name: "gdpbinhquan",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "GDP",
        className: "wi-g_d_p",
        name: "gdp",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Chỉ số giá tiêu dùng",
        className: "wi-c_p_i",
        name: "cpi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "CPI",
        className: "wi-c_p_i",
        name: "cpi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lạm phát",
        className: "wi-c_p_i",
        name: "cpi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tổng mức bán lẻ hàng hóa và dịch vụ",
        className: "wi-h_h_d_v",
        name: "hhdv",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Doanh thu bán lẻ hàng hóa và dịch vụ",
        className: "wi-h_h_d_v",
        name: "hhdv",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Bán lẻ hàng hóa và dịch vụ",
        className: "wi-h_h_d_v",
        name: "hhdv",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vốn đầu tư phát triển xã hội",
        className: "wi-v_d_t_ptxh",
        name: "vdtptxh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vốn đầu tư từ NSNN",
        className: "wi-v_d_t_nsnn",
        name: "vdtnsnn",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vốn đầu tư từ ngân sách nhà nước",
        className: "wi-v_d_t_nsnn",
        name: "vdtnsnn",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vốn đầu tư công",
        className: "wi-v_d_t_nsnn",
        name: "vdtnsnn",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Chỉ số sản xuất công nghiệp",
        className: "wi-i_i_p",
        name: "iip",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "IIP",
        className: "wi-i_i_p",
        name: "iip",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "PMI",
        className: "wi-p_m_i",
        name: "pmi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Purchasing Managers Index",
        className: "wi-p_m_i",
        name: "pmi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Chỉ số quản lý thu mua",
        className: "wi-p_m_i",
        name: "pmi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "FDI",
        className: "wi-f_d_i",
        name: "fdi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vốn đầu tư trực tiếp nước ngoài",
        className: "wi-f_d_i",
        name: "fdi",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Cán cân thương mại",
        className: "wi-c_c_t_m",
        name: "cctm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Nhập khẩu",
        className: "wi-c_c_t_m",
        name: "cctm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Xuất khẩu",
        className: "wi-c_c_t_m",
        name: "cctm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vận chuyển hàng hóa",
        className: "wi-v_t",
        name: "vt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Vận chuyển hành khách",
        className: "wi-v_t",
        name: "vt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Khách quốc tế",
        className: "wi-k_q_t",
        name: "kqt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "M2",
        className: "wi-c_t_t",
        name: "ctt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Cung tiền tệ",
        className: "wi-c_t_t",
        name: "ctt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tổng huy động vốn trong nền kinh tế",
        className: "wi-h_d",
        name: "hd",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tổng tiền gửi trong nền kinh tế",
        className: "wi-h_d",
        name: "hd",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tổng tín dụng trong nền kinh tế",
        className: "wi-t_d",
        name: "td",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tín phiếu kho bạc",
        className: "wi-t_p_k_b",
        name: "tpkb",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "SBV - Bills",
        className: "wi-t_p_k_b",
        name: "tpkb",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Treasury bills",
        className: "wi-t_p_k_b",
        name: "tpkb",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Bills",
        className: "wi-t_p_k_b",
        name: "tpkb",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "OMO",
        className: "wi-n_v_t_t_t",
        name: "nvttm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Nghiệp vụ thị trường mở",
        className: "wi-n_v_t_t_t",
        name: "nvttm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Open Market Operations",
        className: "wi-n_v_t_t_t",
        name: "nvttm",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất liên ngân hàng",
        className: "wi-l_s_l_n_h",
        name: "lslnh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất chiết khấu",
        className: "wi-l_s_d_h",
        name: "lsdh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất tái cấp vốn",
        className: "wi-l_s_d_h",
        name: "lsdh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "LS qua đêm cho vay bù đắp thiếu hụt vốn",
        className: "wi-l_s_d_h",
        name: "lsdh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất điều hành",
        className: "wi-l_s_d_h",
        name: "lsdh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất chính sách",
        className: "wi-l_s_d_h",
        name: "lsdh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lãi suất huy động",
        className: "wi-l_s_h_d",
        name: "lshd",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tỷ giá trung tâm",
        className: "wi-d_h_t_g",
        name: "dhtg",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tỷ giá trần",
        className: "wi-d_h_t_g",
        name: "dhtg",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Tỷ giá sàn",
        className: "wi-d_h_t_g",
        name: "dhtg",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Điều hành tỷ giá",
        className: "wi-d_h_t_g",
        name: "dhtg",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Dự trữ ngoại hối nhà nước",
        className: "wi-d_t_n_h",
        name: "dtnh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Dự trữ ngoại hối",
        className: "wi-d_t_n_h",
        name: "dtnh",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Cán cân thanh toán",
        className: "wi-c_c_t_t",
        name: "cctt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "BOP",
        className: "wi-c_c_t_t",
        name: "cctt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Balance of Payment",
        className: "wi-c_c_t_t",
        name: "cctt",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Thu ngân sách",
        className: "wi-t_c_n_s",
        name: "tcns",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Bội chi ngân sách",
        className: "wi-t_c_n_s",
        name: "tcns",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Chi ngân sách",
        className: "wi-t_c_n_s",
        name: "tcns",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Ngân sách nhà nước",
        className: "wi-t_c_n_s",
        name: "tcns",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Nợ chính phủ",
        className: "wi-n_c_p",
        name: "ncp",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Nợ công",
        className: "wi-n_c_p",
        name: "ncp",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Nợ quốc gia",
        className: "wi-n_c_p",
        name: "ncp",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Dân số",
        className: "wi-d_s",
        name: "ds",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lực lượng lao động",
        className: "wi-l_d",
        name: "ld",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Lao động",
        className: "wi-l_d",
        name: "ld",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Thất nghiệp",
        className: "wi-t_n",
        name: "tn",
        type: "vi_mo_tien_te"
    }, {
        keyWord: "Xi măng Trung Quốc",
        className: "wi-x_m",
        name: "xi_mang",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Xi măng",
        className: "wi-xi_mang_pcb",
        name: "xi_mang_pcb",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá vàng",
        className: "wi-vang",
        name: "vang",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá điện",
        className: "wi-dien",
        name: "dien",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Heo hơi",
        className: "wi-heo_hoi",
        name: "heo_hoi",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Xăng dầu",
        className: "wi-xang_dau",
        name: "xang_dau",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Cà phê",
        className: "wi-ca_phe",
        name: "ca_phe",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Cá tra",
        className: "wi-ca_tra",
        name: "ca_tra",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá tiêu",
        className: "wi-tieu",
        name: "tieu",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá thép",
        className: "wi-thep",
        name: "thep",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Phân Ure",
        className: "wi-phan_ure",
        name: "phan_ure",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Phốt pho",
        className: "wi-phot_pho",
        name: "phot_pho",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Lưu huỳnh",
        className: "wi-luu_huynh",
        name: "luu_huynh",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá niken",
        className: "wi-niken",
        name: "niken",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng Việt Nam",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng Trung Quốc",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng thế giới",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng tăng",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng giảm",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng vượt",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng đạt",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng cao",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng thấp",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng trên",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đồng biến động",
        className: "wi-dong",
        name: "dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá nhôm",
        className: "wi-nhom",
        name: "nhom",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá kẽm",
        className: "wi-kem",
        name: "kem",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá thiếc",
        className: "wi-thiec",
        name: "thiec",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá chì",
        className: "wi-chi",
        name: "chi",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Than cốc",
        className: "wi-than_coc",
        name: "than_coc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Quặng sắt",
        className: "wi-quang_sat",
        name: "quang_sat",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Sợi coton",
        className: "wi-soi_coton",
        name: "soi_coton",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Vải coton",
        className: "wi-vai_coton",
        name: "vai_coton",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Bột giấy",
        className: "wi-bot_giay",
        name: "bot_giay",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Lợn hơi Trung Quốc",
        className: "wi-lon_hoi_trung_quoc",
        name: "lon_hoi_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Dầu cọ",
        className: "wi-dau_co_malaysia",
        name: "dau_co_malaysia",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giấy gợn sóng",
        className: "wi-giay_gon_song_trung_quoc",
        name: "giay_gon_song_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Đậu nành Mỹ",
        className: "wi-dau_nanh_my",
        name: "dau_nanh_my",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Nhựa đường",
        className: "wi-nhua_duong_60_70",
        name: "nhua_duong_60_70",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá đường",
        className: "wi-duong",
        name: "duong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Vải cotton Mỹ",
        className: "wi-vai_cotton_my",
        name: "vai_cotton_my",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Gạo TPXK",
        className: "wi-gao_tpxk",
        name: "gao_tpxk",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Tôm sú",
        className: "wi-tom_su",
        name: "tom_su",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Tôm thẻ",
        className: "wi-tom_the",
        name: "tom_the",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Phụ phẩm lúa gạo",
        className: "wi-phu_pham_lua_gao",
        name: "phu_pham_lua_gao",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Lúa",
        className: "wi-lua",
        name: "lua",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Gạo nguyên liệu",
        className: "wi-gao_nguyen_lieu",
        name: "gao_nguyen_lieu",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Giá bạc",
        className: "wi-bac",
        name: "bac",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Ure Trung Đông",
        className: "wi-ure_trung_dong",
        name: "ure_trung_dong",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Xút Trung Quốc",
        className: "wi-xut_naoh_trung_quoc",
        name: "xut_naoh_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Phân DAP Trung Quốc",
        className: "wi-phan_dap_trung_quoc",
        name: "phan_dap_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Phân Urea Trung Quốc",
        className: "wi-phan_urea_trung_quoc",
        name: "phan_urea_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Thép dây Trung Quốc",
        className: "wi-thep_day_trung_quoc",
        name: "thep_day_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Thép thanh Trung Quốc",
        className: "wi-thep_thanh_trung_quoc",
        name: "thep_thanh_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Thép phế Anh",
        className: "wi-thep_phe_anh",
        name: "thep_phe_anh",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Thép thanh Anh",
        className: "wi-thep_thanh_anh",
        name: "thep_thanh_anh",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "HRC Trung Quốc",
        className: "wi-hrc_trung_quoc",
        name: "hrc_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Đá 0-4",
        className: "wi-da_0_4",
        name: "da_0_4",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Đá mi sàng",
        className: "wi-da_mi_sang",
        name: "da_mi_sang",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Đá 1x2",
        className: "wi-da_1x2",
        name: "da_1x2",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Đá Hộc",
        className: "wi-da_hoc",
        name: "da_hoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Tôn lạnh màu",
        className: "wi-ton_lanh_mau_hoa_sen_045mm",
        name: "ton_lanh_mau_hoa_sen_045mm",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Tôn lạnh",
        className: "wi-ton_lanh_hoa_sen_045mm",
        name: "ton_lanh_hoa_sen_045mm",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Bê tông nhựa mịn",
        className: "wi-be_tong_nhua_min",
        name: "be_tong_nhua_min",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Ống nhựa 27 x 1.8mm",
        className: "wi-ong_nhua_27x18mm",
        name: "ong_nhua_27x18mm",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Ống nhựa 60 x 2mm",
        className: "wi-ong_nhua_60x2mm",
        name: "ong_nhua_60x2mm",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Ống nhựa 90 x 2,9mm",
        className: "wi-ong_nhua_90x29mm",
        name: "ong_nhua_90x29mm",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Sơn lót kháng kiềm",
        className: "wi-son_lot_khang_kiem_cao_cap",
        name: "son_lot_khang_kiem_cao_cap",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Sơn nội thất",
        className: "wi-son_noi_that_tieu_chuan",
        name: "son_noi_that_tieu_chuan",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Sơn ngoại thất",
        className: "wi-son_ngoai_that_tieu_chuan",
        name: "son_ngoai_that_tieu_chuan",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Kính màu trắng cường lực",
        className: "wi-kinh_mau_trang",
        name: "kinh_mau_trang",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Kính Solar control cường lực",
        className: "wi-kinh_solar",
        name: "kinh_solar",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Dây cáp điện",
        className: "wi-day_cap_dien",
        name: "day_cap_dien",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Gạch đất sét nung",
        className: "wi-gach_dat_set_nung",
        name: "gach_dat_set_nung",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Cọc bê tông",
        className: "wi-coc_be_tong_du_ung_luc",
        name: "coc_be_tong_du_ung_luc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Bê tông",
        className: "wi-be_tong_mac_300",
        name: "be_tong_mac_300",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Khí LPG Trung Quốc",
        className: "wi-khi_lpg_trung_quoc",
        name: "khi_lpg_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Dầu WTI",
        className: "wi-dau_wti",
        name: "dau_wti",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Khí thiên nhiên",
        className: "wi-khi_thien_nhien",
        name: "khi_thien_nhien",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Than Newcastle",
        className: "wi-than_newcastle",
        name: "than_newcastle",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Mazút",
        className: "wi-mazut",
        name: "mazut",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Cao su thế giới",
        className: "wi-cao_su_nhat_ban",
        name: "cao_su_nhat_ban",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Cao su",
        className: "wi-cao_su",
        name: "cao_su",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Hạt PET",
        className: "wi-pet_trung_quoc",
        name: "pet_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Hạt nhựa PVC Trung Quốc",
        className: "wi-nhua_pvc_trung_quoc",
        name: "nhua_pvc_trung_quoc",
        type: "vi_mo_hang_hoa"
    }, {
        keyWord: "Hạt nhựa PP Trung Quốc",
        className: "wi-nhua_pp_trung_quoc",
        name: "nhua_pp_trung_quoc",
        type: "vi_mo_hang_hoa"
    },

    // dữ liệu từ tradingeconomics
    {
        "keyWord": "Hot-Rolled Coil Steel (HRC)",
        "name": "hrc_com",
        "className": "hrc:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Steel Rebar",
        "name": "jbp_com",
        "className": "jbp:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Urea Ammonium Nitrate (Urea)",
        "name": "urea_ammonium_nitrate",
        "className": "uaneu:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Urea",
        "name": "urea",
        "className": "ufb:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Rubber (Cao su)",
        "name": "rubber",
        "className": "jn1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Sugar (Đường)",
        "name": "sugar",
        "className": "sb1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Rice (Gạo)",
        "name": "rice",
        "className": "rr1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Crude Oil - Crude Oil WTI",
        "name": "crude_oil",
        "className": "cl1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Brent - Crude Oil Brent",
        "name": "brent",
        "className": "co1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Natural gas - Natural gas",
        "name": "natural_gas",
        "className": "ng1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Gasoline - Gasoline",
        "name": "gasoline",
        "className": "xb1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Heating Oil - Heating Oil",
        "name": "heating_oil",
        "className": "ho1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "Coal (than cốc)",
        "name": "coal",
        "className": "xal1:com" + auth,
        "type": "tradingeconomics"
    }, {
        "keyWord": "US Dollar Vietnamese Dong",
        "name": "usdvnd",
        "className": "2214",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US Dollar Japanese Yen",
        "name": "usdjpy",
        "className": "3",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US Dollar British Pound",
        "name": "usdgbp",
        "className": "2126",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US Dollar Swiss Franc",
        "name": "usdchf",
        "className": "4",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US Dollar Canadian Dollar",
        "name": "usdcad",
        "className": "7",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Astradian Dollar US Dollar ",
        "name": "audusd",
        "className": "5",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "New Zealand Dollar US Dollar",
        "name": "nzdusd",
        "className": "5",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US Dollar Chinese Yuan",
        "name": "usdcny",
        "className": "2111",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Dollar Index",
        "name": "dxy",
        "className": "942611",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "CBOE Volatility Index (VIX)",
        "name": "volatility-sp500-vix-cboe",
        "className": "44336",
        "type": "investing"
    }, {
        "keyWord": "Baltic Dry Index",
        "name": "baltic_dry",
        "className": "940793",
        "type": "investing"
    }, {
        "keyWord": "Baltic Clean Tanker (USD)",
        "name": "baltic-clean-tanker",
        "className": "940799",
        "type": "investing"
    }, {
        "keyWord": "Hợp đồng Tương lai Vàng",
        "name": "gold_future",
        "className": "8830",
        "type": "investing",
        "chiso": true
    },
    // Chỉ số thị trường
    {
        "keyWord": "Vietnam Hanoi Stock Exchange Equity Index",
        "name": "hnxindex",
        "className": "41062",
        "type": "investing",
        "chiso": true
    },
    // dữ liệu từ investing
    {
        "keyWord": "Vietnam Ho Chi Minh Stock Index",
        "name": "vnindex",
        "className": "41063",
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "S&P 500",
        "name": "dow_jone_sp500",
        "className": '166',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US 10Y Bond Yield (%)",
        "name": "us_bond_10y_investing",
        "className": '23705',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "US 1Y Bond Yield (%)",
        "name": "us_bond_1y_investing",
        "className": '23700',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Vietnam 10Y Bond Yield (%)",
        "name": "vietnam_bond_10y_investing",
        "className": '29379',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Vietnam 1Y Bond Yield (%)",
        "name": "vietnam_bond_1y",
        "className": '29380',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Hợp đồng Tương lai nhựa Polyvinyl Clorua - DPVc1 (CNY)",
        "name": "Polyvinyl_Clorua_DPVc1",
        "className": '961746',
        "type": "investing"
    }, {
        "keyWord": "Hợp đồng Tương lai nhựa Polyêtylen - DLLc1 (CNY)",
        "name": "nhua_lldpe",
        "className": '961744',
        "type": "investing"
    }, {
        "keyWord": "USA Federal Reserve Balance Sheet (Bil USD)",
        "name": "fed-ballance-sheet",
        "className": '2145.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Fed Funds Target Rate (%)",
        "name": "fed-funds-rate",
        "className": '168.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Fed Funds Composite Interest Rate (%)",
        "name": "fed-funds-composite-interest-rate",
        "className": '985525',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Chỉ số CPI Mỹ (%YoY)",
        "name": "usa_cpi",
        "className": '733.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Chỉ số CPI lõi Mỹ (%YoY)",
        "name": "usa_cpi_core",
        "className": '736.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Tỷ lệ thất nghiệp Mỹ (%)",
        "name": "unemployment_rate_cpi",
        "className": '300.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Chỉ số Thị Trường Nhà ở của NAHB - Mỹ",
        "name": "nahb-housing-market-index",
        "className": '218.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "S&P/Case-Shiller House Price Index (%YoY)",
        "name": "case-shiller-house-price-index-yoy",
        "className": '329.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "S&P/Case-Shiller House Price Index (%MoM)",
        "name": "case-shiller-house-price-index-mom",
        "className": '913.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "30 Year US mortgage rate (%)",
        "name": "mba-30-year-mortgage-rate",
        "className": '1042.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "USA Retail Inventories Excluding Auto (%)",
        "name": "retail-inventories-ex-auto-1887",
        "className": '1887.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Eurozone Interest Rate (%)",
        "name": "eurozone-interest-rate-decision",
        "className": '164.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Chỉ số CPI - Trung Quốc (%YoY)",
        "name": "chinese-cpi",
        "className": '459.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Chỉ số IIP - Trung Quốc (%YoY)",
        "name": "chinese-industrial-production",
        "className": '462.json',
        "type": "investing",
        "chiso": true
    }, {
        "keyWord": "Lãi suất cho vay cơ bản - Trung Quốc (%)",
        "name": "pboc-loan-prime-rate",
        "className": '1967.json',
        "type": "investing",
        "chiso": true
    }
]