<p class="pb-4 text-justify text-lg">
	내가 Rust를 과도하게 사랑하는 건지, 요즘 손이 가는 기술들은 하나 같이 다 Rust로 만들어진 것들이다.
	<a href="https://www.surrealdb.com" class="anchor">SurrealDB</a>가 그 시작이었고, 그 다음은
	<a href="https://www.meilisearch.com" class="anchor">Meilisearch</a>다. 아주 간단한 검색 엔진이고,
	(그렇다기엔 매우 강력한 엔진이고,) 더 널리 쓰이는 검색 엔진인
	<a href="https://www.elastic.co/" class="anchor">Elasticsearch</a>보다 내 입장에선 더 이해하기
	쉬운 로직으로 구성되어 있었기에 그냥 저냥 손이 갔다.
</p>
<p class="pb-4 text-justify text-lg">
	그래서 사용하는 데에 익숙해질 겸 토이 프로젝트를 하나 개발해보고 있는데, 바로 평가원 수학 문제
	검색 엔진이다. 좀 challenging하다 느낄 만한 부분은 어떻게 수식을 인덱싱하냐는 건데, 사실 아직
	데이터 정형에 대한 감이 잡혀 있지는 않다. 빨리 이를 구성해야 뭐라도 진척이 될 텐데 말이다.
</p>
<p class="pb-4 text-justify text-lg">
	하여튼, 빨리 소스를 보자. 어떤 식으로 구성되어 있는지 매우 궁금하다. 오늘은 인덱싱에 대해 확인해
	볼 것이다. 궁금한 사람은 직접 소스를 확인하도록. (<a
		href="https://github.com/meilisearch/meilisearch/tree/main/crates/milli"
		class="anchor"
	>
		MeiliSearch 인덱싱 크레이트
	</a>)
</p>
<p class="pb-4 text-justify text-lg">
	이렇게 큰 프로젝트가 이따구로 코멘트가 부실하면 어쩌자는 건지 모르겠다. 관리 안 되는 오픈 소스는
	이래서 문제다. SurrealDB는 정말 관리를 잘 해놓아서 코드만 차근히 읽어도 다 이해가 되는데, 좀 보고
	배우자.
</p>
<p class="pb-4 text-justify text-lg">
	MeiliSearch의 기본 사양 중 가장 눈여겨볼만한 점은 바로 매우 유연한 타입 시스템에 있다.
</p>
