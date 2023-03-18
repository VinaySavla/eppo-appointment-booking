$baseurl = 'https://api.zixipay.com';
$endpoint = '/apiv2/getwallet';
$uid = 'kkdyrcuxj9jvc6f76fgw';
$apikey = 'Dq7MRukyFMxvs33944gsrsBGLLThVUQPqcScMJGv';

$params = array(
    'currency'  => 'BTC',
    'uid'       => $uid,
    'ts'        => time()
  );

$signature = hash_hmac('sha256', http_build_query($params), $apikey);   // generate signature

$params += ['sig' => $signature];   // add the signature to the end of parameters array

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_HEADER => false,
    CURLOPT_HTTPHEADER => array('Content-Type: application/x-www-form-urlencoded'),
    CURLOPT_ENCODING => 'gzip',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_URL => $baseurl . $endpoint,
    CURLOPT_POSTFIELDS => http_build_query($params)
  ));

$result = curl_exec($curl);