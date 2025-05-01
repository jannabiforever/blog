<script>
	import Paragraph from '$lib/components/Paragraph.svelte';
</script>

<Paragraph>
	<a href="https://www.surrealdb.com" class="anchor">SurrealDB</a>는 Rust로 만들어진 모던
	데이터베이스 시스템이다. 최신 기술답게, 웬만한 백엔드 기능은 SurrealDB 레이어에서 수행 가능하다.
	RBAC (Role-Based Access Control)가 내장되어 있어서 간단한 쿼리로 인증 기능을 탑재할 수 있고, 다른
	서버에 http 요청을 날릴 수도 있으며, 이런 건 왜 있는지 모르겠는데 geospatial (좋은 번역을
	모르겠다?) 데이터 분석도 내장 함수로 지원된다. 예를 들어 두 점의 위도, 경도 좌표를 이용해 그 사이
	거리를 계산할 수 있다. 아마 지도 좌표 이용하는 ML 모델들을 위한 것일 듯하다. 파일 읽는 것도
	가능하다. 모든 파일 시스템-like 주소만 있으면 읽고 쓰는 게 모두 가능해서, 사실 이제는 DaaS라
	부르기도 민망할 정도이다. (현재는 alpha 버전에서만 지원된다.)
</Paragraph>
<Paragraph>
	얘네들 말로는 ml 모델을 위한 데이터베이스라던데, 나는 ml은 잘 몰라서, 이 부분은 모르겠다.
</Paragraph>
