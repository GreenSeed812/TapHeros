<GameFile>
  <PropertyGroup Name="BattleLayer" Type="Layer" ID="00224c13-d390-48bb-bf3c-2a461bc38eba" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="BattleLayer" Tag="175" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="Bg_Sprite" ActionTag="543689407" Tag="15" IconVisible="False" TopMargin="-0.4521" BottomMargin="0.4521" ctype="SpriteObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.4521" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5004" />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="bg/bg_1.jpg" Plist="" />
            <BlendFunc Src="770" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="BattlePanel" ActionTag="1752295040" Tag="16" IconVisible="False" LeftMargin="0.0032" RightMargin="-0.0032" TopMargin="236.0000" BottomMargin="260.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="640.0000" />
            <Children>
              <AbstractNodeData Name="Dest_Node" ActionTag="-848293189" Tag="17" IconVisible="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="320.0000" BottomMargin="320.0000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="320.0000" Y="320.0000" />
                <Scale ScaleX="1.4805" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="MonsterNode" ActionTag="279336678" Tag="21" IconVisible="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="350.0000" BottomMargin="290.0000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="320.0000" Y="290.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4531" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="Panel_Money" ActionTag="-1439921502" Tag="10" IconVisible="False" LeftMargin="5.2348" RightMargin="-5.2348" TopMargin="5.4944" BottomMargin="574.5056" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="60.0000" />
                <Children>
                  <AbstractNodeData Name="MoneyImage" ActionTag="-1582695274" Tag="11" IconVisible="False" LeftMargin="281.0000" RightMargin="301.0000" TopMargin="-9.0000" BottomMargin="11.0000" LeftEage="19" RightEage="19" TopEage="19" BottomEage="19" Scale9OriginX="19" Scale9OriginY="19" Scale9Width="20" Scale9Height="20" ctype="ImageViewObjectData">
                    <Size X="58.0000" Y="58.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="310.0000" Y="40.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4844" Y="0.6667" />
                    <PreSize X="0.0906" Y="0.9667" />
                    <FileData Type="Normal" Path="icon/icon_jinbi.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="Money" ActionTag="-659794556" Tag="19" IconVisible="False" LeftMargin="340.0000" RightMargin="293.0000" TopMargin="25.0000" BottomMargin="20.0000" LabelText="0" ctype="TextBMFontObjectData">
                    <Size X="7.0000" Y="15.0000" />
                    <AnchorPoint />
                    <Position X="340.0000" Y="20.0000" />
                    <Scale ScaleX="2.0000" ScaleY="2.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5313" Y="0.3333" />
                    <PreSize X="0.0109" Y="0.2500" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="Button_OfflineCoin" ActionTag="842958177" Tag="20" IconVisible="False" LeftMargin="23.0000" RightMargin="515.0000" TopMargin="149.0000" BottomMargin="-191.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="72" Scale9Height="80" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="102.0000" Y="102.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="74.0000" Y="-140.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1156" Y="-2.3333" />
                    <PreSize X="0.1594" Y="1.7000" />
                    <TextColor A="255" R="65" G="65" B="70" />
                    <DisabledFileData Type="Normal" Path="button/btn_offlineCoin_n.png" Plist="" />
                    <PressedFileData Type="Normal" Path="button/btn_offlineCoin_s.png" Plist="" />
                    <NormalFileData Type="Normal" Path="button/btn_offlineCoin_n.png" Plist="" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="effect" ActionTag="-840547557" Tag="21" IconVisible="False" LeftMargin="23.0000" RightMargin="515.0000" TopMargin="149.0000" BottomMargin="-191.0000" ctype="SpriteObjectData">
                    <Size X="102.0000" Y="102.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="74.0000" Y="-140.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1156" Y="-2.3333" />
                    <PreSize X="0.1594" Y="1.7000" />
                    <FileData Type="Normal" Path="effect/effect_goldcoindrop.png" Plist="" />
                    <BlendFunc Src="1" Dst="771" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="325.2348" Y="604.5056" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5082" Y="0.9445" />
                <PreSize X="1.0000" Y="0.0938" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0032" Y="580.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5106" />
            <PreSize X="1.0000" Y="0.5634" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="zhezhao" ActionTag="1323073161" VisibleForFrame="False" Tag="71" IconVisible="False" TopMargin="1.9705" BottomMargin="0.0295" ClipAble="False" ComboBoxIndex="1" ColorAngle="90.0000" ctype="PanelObjectData">
            <Size X="640.0000" Y="1134.0000" />
            <AnchorPoint />
            <Position Y="0.0295" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition Y="0.0000" />
            <PreSize X="1.0000" Y="0.9982" />
            <SingleColor A="255" R="255" G="255" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>